var app=getApp();
var common = require('../../utils/util.js');


const groupinfo = ['区域高管',
  '区域办公室',
  '运营管理部',
  '工程技术部',
  '成本管理部',
  '设计管理部',
  '人力资源部',
  '品牌文化部',
  '营销管理部',
  '投资拓展部',
  '客户关系管理部',
  '财务资金部',
  '采购部 ',
  '多元战略办公室',
  '广州中城市公司',
  '广州东城市公司',
  '广州南城市公司',
  '韶关城市公司',
  '清远城市公司',
  '赣州城市公司',
  '新余城市公司',
  '其他'];


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
      hiddenmodalput:true, 
    },
onLoad:function(){


  try {
    wx.clearStorageSync();
    console.log('清除缓存成功');

    var that = this;
    that.setData({
      groupinfo: groupinfo,
    })
    console.log(groupinfo);
    wx.login({
      success: function (res) {
        wx.showToast({
          title: '正在登陆...',
          icon: 'loading',
          mask:true,
          duration: 4000
        })
        
        if(res.code){
          console.log('login 成功');
          var code = res.code;
          console.log('登录请求所需code', code);
          wx.showToast({
            title: '正在请求数据...',
            icon: 'loading',
            mask: true,
            duration: 4000
          })
          wx.getUserInfo({
            success: function (res) {
              console.log('获取用户信息成功：', res.userInfo);
              wx.showToast({
                title: '获取用户信息成功...',
                icon: 'loading',
                mask: true,
                duration: 4000
              })
              var user = res.userInfo;
              try {     //将个人信息放入缓存
                wx.setStorageSync('userinfo', user)
                console.log('将个人信息放入缓存', user);
              } catch (e) {}

              wx.request({            //获取个人排行榜排名数据表
                url: 'https://chengjiushuangxiang.com/Martin/tp5/public/index.php/index/wx/rank',
                data: '',
                header: {},
                method: 'GET',
                dataType: 'json',
                responseType: 'text',
                success: function (res) {
                  console.log('rank', res.data);
                },
                fail:function(res){
                  wx.showToast({
                    title: '连接失败 - 01',
                    icon: 'none',
                    duration: 4000
                  })
                }
              })
              wx.showToast({
                title: '正在读取数据...',
                icon: 'loading',
                mask: true,
                duration: 4000
              })
              wx.request({                                      //登录请求并将用户名头像上传数据库的用户信息表
                url: 'https://chengjiushuangxiang.com/Martin/tp5/public/index.php/index/wx/index',
                data: {
                  code: code,
                  name: user.nickName,
                  touxiang: user.avatarUrl,
                },
                success: function (res) {
                  console.log('session & openid: ', res.data)
                  try {
                    wx.setStorageSync('openid', res);           //登录成功，将openid放入缓存
                    common.show('登录成功', 'success');
                  } catch (e) {

                  }
                  try {
                    var value = wx.getStorageSync('openid')    //取出缓存的openid
                    if (value) {
                      console.log('读取缓存中openid成功', value.data.openid);
                      var openid = value.data.openid;
                      var session_key = res.data.session_key;
                      wx.showToast({
                        title: '获取运动步数...',
                        icon: 'loading',
                        mask: true,
                        duration: 4000
                      })
                      wx.getWeRunData({            //微信运动api，
                        success(res) {
                          const encryptedData = res.encryptedData
                          const iv = res.iv
                          wx.request({
                            url: 'https://chengjiushuangxiang.com/Martin/tp5/public/index.php/index/get/decrypt',  //将从微信运动api获取到的 en iv 和 sessionkey  发送到服务器进行解密
                            data: {
                              encryptedData: encryptedData,
                              iv: iv,
                              session_key: session_key,
                            },
                            method: 'GET',
                            success: function (res) {    //解密成功回调函数
                              console.log('获取步数成功', res);
                              wx.showToast({
                                title: '获取步数成功...',
                                icon: 'loading',
                                mask: true,
                                duration: 4000
                              })
                              var yundong = res.data.stepInfoList;
                              var bushu = yundong[30].step;
                              var timestamp = yundong[30].timestamp;
                              console.log('今天步数：', bushu);
                              that.setData({
                                today_steps: bushu,
                              })
                              wx.request({            //获取个人排行榜排名数据表
                                url: 'https://chengjiushuangxiang.com/Martin/tp5/public/index.php/index/wx/rank_nolimit',
                                data: '',
                                header: {},
                                method: 'GET',
                                dataType: 'json',
                                responseType: 'text',
                                success: function (res) {
                                  wx.showToast({
                                    title: '正在排名...',
                                    icon: 'loading',
                                    mask: true,
                                    duration: 4000
                                  })
                                      console.log('缓存步数排名成功', res.data);
                                      var value = res.data;
                                      wx.login({
                                        success: function (res) {
                                          var code = res.code;
                                          wx.request({
                                            url: 'https://chengjiushuangxiang.com/Martin/tp5/public/index.php/index/wx/getsek',
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
                                                    step_rank: rank,
                                                  })
                                                }
                                              }
                                              wx.showToast({
                                                title: '获取组别信息...',
                                                icon: 'loading',
                                                mask: true,
                                                duration: 4000
                                              })
                                              wx.request({
                                                url: 'https://chengjiushuangxiang.com/Martin/tp5/public/index.php/index/wx/yz_group',
                                                data: {
                                                  openid: openid,
                                                },
                                                success: function (res) {

                                                  if (res.data == 1) {          //如果数据表中group_name不存在，跳转到yz页面添加团队信息
                                                    that.setData({
                                                      hiddenmodalput: false,
                                                    })
                                                  } else {
                                                    that.setData({
                                                      hiddenmodalput: true,
                                                    })
                                                    wx.setStorageSync('groupname', res.data);
                                                    console.log('用户组别：', wx.getStorageSync('groupname'));
                                                  }
                                                }
                                              })
                                              wx.showToast({
                                                title: '正在生成...',
                                                icon: 'loading',
                                                mask: true,
                                                duration: 2000
                                              })
                                              wx.request({
                                                url: 'https://chengjiushuangxiang.com/Martin/tp5/public/index.php/index/wx/getuserinfo',     //发出请求，拿openid去找数据库user_info表
                                                data: {
                                                  openid: openid,
                                                },
                                                success: function (res) {
                                                  wx.setStorageSync('avatarUrl', res.data.touxiang);
                                                  wx.setStorageSync('nickName', res.data.name);
                                                }
                                              })
                                            },
                                          })
                                        }
                                      })
                                    
                                
                                },
                              })
                            }
                          })
                        }
                      })//asd

                    }
                  } catch (e) {
                    console.log('获取缓存openid失败,不能完成添加团队等', e);
                    common.show('错误');
                  }
                },
                fail:function(res){
                console.log(res.data);
                wx.showToast({
                  title: '获取用户信息失败 - 02',
                  icon: 'none',
                  duration: 2000
                })
                }
              })
            },
            fail:function(res){
              console.log(res);
              wx.showToast({
                title: '获取信息失败 - 02',
                icon: 'none',
                duration: 2000
              })
            }
          })
        } else {
          wx.showToast({
            title: '登陆失败 - 01',
            icon:'none',
            duration:2000
          })
        }

      }
    })
    wx.request({
      url: 'https://chengjiushuangxiang.com/Martin/tp5/public/index.php/index/wx/index_activity',
      success: function (res) {
        console.log('activity', res);
        that.setData({
          img: res.data,
        })
      }
    })
  } catch (e) {
    // Do something when catch error

  }
},
   onPullDownRefresh: function () {
    var that = this;
    common.show('正在刷新','loading');
    wx.showNavigationBarLoading()
    common.clearstor('rank');
    wx.login({
      success: function (res) {
        wx.request({
          url: 'https://chengjiushuangxiang.com/Martin/tp5/public/index.php/index/wx/getsek',
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
                      url: 'https://chengjiushuangxiang.com/Martin/tp5/public/index.php/index/get/decrypt',
                      data: {
                        encryptedData: res.encryptedData,
                        iv: res.iv,
                        session_key: session_key,
                        groupname: wx.getStorageSync('groupname'),
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
                          url: 'https://chengjiushuangxiang.com/Martin/tp5/public/index.php/index/wx/rank_nolimit',
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
                                      url: 'https://chengjiushuangxiang.com/Martin/tp5/public/index.php/index/wx/getsek',
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
                              url: 'https://chengjiushuangxiang.com/Martin/tp5/public/index.php/index/wx/index_activity',
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
                  },
                  fail: function () {
                    wx.hideNavigationBarLoading();
                    wx.stopPullDownRefresh();
                    wx.showToast({
                      title: '网络异常',
                      icon:'fail',
                      duration:2000,
                    })
                  }
                })
              },
              fail:function(){
                wx.hideNavigationBarLoading();
                wx.stopPullDownRefresh();
                wx.showToast({
                  title: '网络异常',
                  icon: 'fail',
                  duration: 2000,
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
   },

   bindPickerChange:function(e){
     console.log("点击分组");
    var that = this;
    var group = groupinfo;
    that.setData({
      index : e.detail.value,
    })
    wx.setStorage({
      key: 'groupname',
      data: group[e.detail.value],
    })
    console.log(group[e.detail.value]);
   },

  confirm:function(){
    var that = this;
    var openid = wx.getStorageSync('openid').data['openid'];
    wx.getStorage({
      key: 'groupname',
      success: function(res) {
        var groupname=res.data;
        console.log(groupname);
        wx.request({
          url: 'https://chengjiushuangxiang.com/Martin/tp5/public/index.php/index/wx/yzsubmit',
          data: {
            openid: openid,
            groupname: groupname,
          },
          success: function (res) {
            console.log(res);
            if (res.data == 0) {
              wx.showToast({
                title: '提交成功',
                icon: 'success',
                duration: 2000
              })
              that.setData({
                hiddenmodalput: true
              })
            } else {
              wx.showToast({
                title: '提交失败',
                icon: 'success',
                duration: 2000
              })
            }
          }
        })
      },
    })
  },

   cancel:function(){
     wx.showToast({
       title: '请提交分组信息',
       icon: 'success',
       duration: 1000
     })  
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

  shouquan:function(){
    this.onLoad();
  },
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '超级健身营Plus',
      path: 'pages/index/index',
      imageUrl:'https://chengjiushuangxiang.com/Martin/tp5/public/upload/ad/1.jpg',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  }
})
