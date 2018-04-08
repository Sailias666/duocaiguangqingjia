var app=getApp();
var common = require('../../utils/util.js');
Page({
  data: {
    openid:'',
    img:'',
      indicatorDots: true,
      autoplay: true,
      interval: 3000,
      duration: 1000,
      userInfo: {},
      today_steps:'',
      step_rank: '',
    },
onLoad:function(){
  var that=this;
  wx.login({
    success: function (res) {
      var code = res.code;
      wx.getUserInfo({
        success: function (res) {
          console.log('用户信息', res.userInfo);
          console.log('登录请求所需code', code);
          var user = res.userInfo;
          try {     //将个人信息放入缓存
            wx.setStorageSync('userinfo', user)
            console.log('将个人信息放入缓存', user);
          } catch (e) { }
          wx.request({                                      //登录请求并将用户名头像上传数据库的用户信息表
            url: 'http://plahui.top/index.php/wx/wx/index',
            data: {
              code: code,
              name: user.nickName,
              touxiang: user.avatarUrl,
            },
            success: function (res) {
              try {
                wx.setStorageSync('openid', res);           //登录成功，将openid放入缓存
                common.show('登录成功', 'success');
              } catch (e) {
              }
              console.log('首次登录授权缓存成功异步openid', res);    
                        try {
                          var value = wx.getStorageSync('openid')    //取出缓存的openid
                          if (value) {
                            console.log('获取缓存成功', value.data.openid);
                            var openid = value.data.openid;
                            wx.request({
                              url: 'http://plahui.top/index.php/wx/wx/yz_group',     //发出请求，拿openid去找数据库user_info表中的团队名group_name 
                              data: {
                                openid:openid,
                              },
                              success: function (res) {
                                if (res.data == 1) {          //如果数据表中group_name不存在，跳转到yz页面添加团队信息
                                  wx.redirectTo({
                                    url: '../yz/yz'
                                  })
                                } else {    }
                              }
                            })
                          }
                        } catch (e) {
                          console.log('获取缓存openid失败,不能完成添加团队等', e);
                          common.show('错误');
                        }
              var session_key = res.data.session_key;
              wx.getWeRunData({            //微信运动api，
                success(res) {
                  const encryptedData = res.encryptedData
                  const iv = res.iv
                  wx.request({
                    url: 'http://plahui.top/index.php/wx/get/decrypt',  //将从微信运动api获取到的 en iv 和 sessionkey  发送到服务器进行解密
                    data: {
                      encryptedData: encryptedData,
                      iv: iv,
                      session_key: session_key
                    },
                    method: 'GET',
                    success: function (res) {    //解密成功回调函数
                      console.log('获取步数', res);
                      var yundong = res.data.stepInfoList;
                      var bushu = yundong[30].step;
                      var timestamp = yundong[30].timestamp;
                      that.setData({
                        today_steps:bushu,
                      })
                      wx.request({            //获取个人排行榜排名数据表
                        url: 'http://plahui.top/index.php/wx/wx/rank',
                        data: '',
                        header: {},
                        method: 'GET',
                        dataType: 'json',
                        responseType: 'text',
                        success: function (res) {
                          var data = res.data;//数组
                          wx.setStorage({
                            key: "rank",
                            data: data,
                          })
                          wx.getStorage({
                            key: 'rank',
                            success: function (res) {
                              console.log('缓存成功->数据库排序后', res.data);
                              var value = res.data;
                              wx.login({
                                success: function (res) {
                                  var code = res.code;
                                  wx.request({
                                    url: 'http://plahui.top/index.php/wx/wx/getsek',
                                    data: {
                                      code: code,
                                    },
                                    success: function (res) {
                                      var openid = res.data.openid;
                                      for (var i = 0; i < value.length; i++) {
                                        if (openid == value[i].user_openid) {
                                          console.log('排名', i + 1);
                                          var rank = i + 1;
                                          that.setData({
                                            step_rank:rank,
                                          })
                                        }
                                      }
                                    },
                                  })
                                }
                              })
                            }
                          })
                        },
                      })
                    }
                  })
                }
              })

            },
          })
        },
      })
    }
  })
   wx.request({
    url: 'http://plahui.top/index.php/wx/wx/index_activity',
    success: function (res) {
      that.setData({
          img: res.data,
      })
    }
})
},
   onPullDownRefresh: function () {
    var that = this;
    console.log('下拉刷新');
    common.show('','loading');
    wx.showNavigationBarLoading()
    common.clearstor('rank');
    wx.login({
      success: function (res) {
        wx.request({
              url: 'http://plahui.top/index.php/wx/wx/getsek',
              data: {
                code: res.code,
              },
              success: function (res) {
                var session_key = res.data.session_key;
                var openid = res.data.openid;
                wx.getWeRunData({
                  success(res) {
                    const encryptedData = res.encryptedData
                    const iv = res.iv
                    wx.request({
                      url: 'http://plahui.top/index.php/wx/get/decrypt',
                      data: {
                        encryptedData: res.encryptedData,
                        iv: res.iv,
                        session_key: session_key
                      },
                      method: 'GET',
                      success: function (res) {
                        console.log('获取步数', res);
                        var yundong = res.data.stepInfoList;
                        var bushu = yundong[30].step;
                        var timestamp = yundong[30].timestamp;
                        that.setData({
                          today_steps: bushu,
                        })
                        wx.request({
                          url: 'http://plahui.top/index.php/wx/wx/rank',
                          data: '',
                          header: {},
                          method: 'GET',
                          dataType: 'json',
                          responseType: 'text',
                          success: function (res) {
                            var data = res.data;//数组
                            wx.setStorage({
                              key: "rank",
                              data: data,
                            })
                            wx.getStorage({
                              key: 'rank',
                              success: function (res) {
                                console.log('缓存成功->数据库排序后', res.data);
                                var value = res.data;
                                wx.login({
                                  success: function (res) {
                                    var code = res.code;
                                    wx.request({
                                      url: 'http://plahui.top/index.php/wx/wx/getsek',
                                      data: {
                                        code: code,
                                      },
                                      success: function (res) {
                                        var openid = res.data.openid;
                                        for (var i = 0; i < value.length; i++) {
                                          if (openid == value[i].user_openid) {
                                            console.log('排名', i + 1);
                                            that.setData({
                                              step_rank: i + 1,
                                            })
                                          }
                                        }

                                      },
                                    })
                                  }
                                })
                              }
                            })
                            wx.request({
                              url: 'http://plahui.top/index.php/wx/wx/index_activity',
                              success: function (res) {
                                that.setData({
                                  img: res.data,
                                })
                              }
                            })
                          },
                          fail: function (res) { },
                          complete: function (res) {
                            wx.hideNavigationBarLoading() //完成停止加载
                            wx.stopPullDownRefresh() //停止下拉刷新
                            common.show('刷新完成', 'success');
                          },
                        })
                      }
                    })
                  }
                })
              }
        })
      },
    })
  },  
   /**
   * 生命周期函数--监听页面卸载
   */
   onUnload: function () {
     var res = wx.getStorageInfoSync();
     console.log('所有缓存', res);
     common.clearstor('uesrinfo')
   },

  tzcard: function () {
    wx.navigateTo({
      url: '../../detail/card/card'
    })
  },
  tzchallenge: function () {
    wx.navigateTo({
      url: '../../detail/challenge/challenge'
    })
  },
  tzrank: function () {
    wx.navigateTo({
      url: '../../detail/rank/rank'
    })
  },
  tzintegral: function () {
    wx.navigateTo({
      url: '../../detail/integral/integral'
    })
  },

  goto_daka: function () {
    wx.navigateTo({
      url: '../../detail/card/card'
    })

  },
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '多彩广清家',
      path: 'pages/index/index',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  }
})
