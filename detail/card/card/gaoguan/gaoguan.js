// detail/card/card/card_detail/card_detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: '',
    data: '',
    currentTab:0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    console.log('onload');
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }
    });
    wx.getStorage({
      key: 'openid',
      success: function (res) {
        console.log('openid', res.data.data.openid);
        that.setData({
          openid: res.data.data.openid
        })
      },
    })

    this.setData({
      id: options['id'],
      hiddenmodalput: true,
      hiddenmodalput2: true,
    })
    wx.setStorage({
      key: 'activity_num',
      data: options['id'],
    })
    wx.request({
      url: 'https://chengjiushuangxiang.com/Martin/tp5/public/index.php/index/wx/get_activity',
      data: {
        activity_num: options['id'],
      },
      success: function (res) {
        console.log(res);
        that.setData({
          activity: res.data
        })

        wx.request({
          url: 'https://chengjiushuangxiang.com/Martin/tp5/public/index.php/index/wx/get_comment',
          data: {
            activity_num: wx.getStorageSync('activity_num'),
          },
          success: function (res) {
            that.setData({
              data: res.data,
            })
            console.log(res);
            var comment_id = '';
            for (var i = 0; i < res.data.length; i++) {
              comment_id = comment_id + res.data[i]['comment_id'] + ','
            }
            comment_id = comment_id.substring(0, comment_id.length - 1)
            wx.setStorage({
              key: 'comment_id_list',
              data: comment_id,
            })
            wx.request({
              url: 'https://chengjiushuangxiang.com/Martin/tp5/public/index.php/index/wx/get_pinglun',
              data: {
                comment_id: comment_id,
              },
              success: function (res) {
                that.setData({
                  pinglun: res.data,
                })
                console.log(res.data);

                wx.request({
                  url: 'https://chengjiushuangxiang.com/Martin/tp5/public/index.php/index/wx/get_gaoguan_rank',
                  data: {
                  },
                  success: function (res) {
                    that.setData({
                      gaoguan: res.data,
                    })
                  }
                })
              }
            })
          }
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  // 滑动切换tab 
  bindChange: function (e) {
    var that = this;
    that.setData({ currentTab: e.detail.current });
  },
  // 点击tab切换 
  swichNav: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('onshow');
    var that = this;
    var id = wx.getStorageSync('activity_num');
    this.setData({
      id: id,
      hiddenmodalput: true,
    })
    wx.request({
      url: 'https://chengjiushuangxiang.com/Martin/tp5/public/index.php/index/wx/get_activity',
      data: {
        activity_num: wx.getStorageSync('activity_num'),
      },
      success: function (res) {
        console.log(res);
        that.setData({
          activity: res.data
        })

        wx.request({
          url: 'https://chengjiushuangxiang.com/Martin/tp5/public/index.php/index/wx/get_comment',
          data: {
            activity_num: wx.getStorageSync('activity_num'),
          },
          success: function (res) {
            that.setData({
              data: res.data,
            })
            console.log('comment', res);
            var comment_id = '';
            for (var i = 0; i < res.data.length; i++) {
              comment_id = comment_id + res.data[i]['comment_id'] + ','
            }
            comment_id = comment_id.substring(0, comment_id.length - 1)
            wx.setStorage({
              key: 'comment_id_list',
              data: comment_id,
            })
            wx.request({
              url: 'https://chengjiushuangxiang.com/Martin/tp5/public/index.php/index/wx/get_pinglun',
              data: {
                comment_id: comment_id,
              },
              success: function (res) {
                that.setData({
                  pinglun: res.data,
                })
                console.log(res.data);
              }
            })
          }
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    wx.showNavigationBarLoading();
    console.log('onPullDownRefresh');
    var that = this;
    var id = wx.getStorageSync('activity_num');
    wx.request({
      url: 'https://chengjiushuangxiang.com/Martin/tp5/public/index.php/index/wx/get_activity',
      data: {
        activity_num: id,
      },
      success: function (res) {
        console.log(res);
        that.setData({
          activity: res.data
        })

        wx.request({
          url: 'https://chengjiushuangxiang.com/Martin/tp5/public/index.php/index/wx/get_comment',
          data: {
            activity_num: id,
          },
          success: function (res) {
            that.setData({
              data: res.data,
            })
            console.log(res);
            var comment_id = '';
            for (var i = 0; i < res.data.length; i++) {
              comment_id = comment_id + res.data[i]['comment_id'] + ','
              
            }
            comment_id = comment_id.substring(0, comment_id.length - 1)
            wx.setStorage({
              key: 'comment_id_list',
              data: comment_id,
            })
            wx.request({
              url: 'https://chengjiushuangxiang.com/Martin/tp5/public/index.php/index/wx/get_pinglun',
              data: {
                comment_id: comment_id,
              },
              success: function (res) {
                that.setData({
                  pinglun: res.data,
                })

                wx.request({
                  url: 'https://chengjiushuangxiang.com/Martin/tp5/public/index.php/index/wx/get_gaoguan_rank',
                  data: {
                  },
                  success: function (res) {
                    that.setData({
                      gaoguan: res.data,
                    })
                    console.log(res.data);
                    wx.stopPullDownRefresh();
                    wx.hideNavigationBarLoading();
                    wx.showToast({
                      title: '刷新成功',
                      icon: 'success',
                      duration: 1000

                    })
                  }
                })

              }
            })
          }
        })
      }
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  pinglun: function (e) {
    var that = this;
    that.setData({
      hiddenmodalput: false,
    })
    wx.setStorage({
      key: 'comment_id',
      data: e.target.dataset['comment_id'],
    })
  },
  confirm: function (e) {
    var that = this;
    wx.getStorage({
      key: 'pinglun_msg',
      success: function (res) {
        var pinglun_msg = res.data;
        console.log(pinglun_msg);
        wx.getStorage({
          key: 'comment_id',
          success: function (res) {
            var comment_id = res.data;
            console.log(comment_id);
            wx.getStorage({
              key: 'nickName',
              success: function (res) {
                var user_name = res.data;
                console.log(user_name);
                wx.request({
                  url: 'https://chengjiushuangxiang.com/Martin/tp5/public/index.php/index/wx/add_pinglun',
                  data: {
                    user_name: user_name,
                    comment_id: comment_id,
                    pinglun_msg: pinglun_msg,
                  },
                  success: function (res) {
                    console.log(res);
                    wx.showToast({
                      title: '正在提交',
                      icon: 'loading',
                      duration: 1000
                    })
                    that.setData({
                      hiddenmodalput: true,
                    })
                    wx.getStorage({
                      key: 'comment_id_list',
                      success: function (res) {
                        console.log(res.data);
                        wx.request({
                          url: 'https://chengjiushuangxiang.com/Martin/tp5/public/index.php/index/wx/get_pinglun',
                          data: {
                            comment_id: res.data,
                          },
                          success: function (res) {
                            that.setData({
                              pinglun: res.data,
                            })
                            console.log(res.data);
                          }
                        })
                      },
                    })

                  }
                })
              },
            })

          },
        })
      },
    })

  },

  confirm2: function (e) {
    var that = this;
    wx.getStorage({
      key: 'someone',
      success: function (res) {
        var someone = res.data;
        console.log(someone);
        wx.getStorage({
          key: 'pinglun_msg',
          success: function (res) {
            var pinglun_msg = res.data;
            console.log(pinglun_msg);
            wx.getStorage({
              key: 'comment_id',
              success: function (res) {
                var comment_id = res.data;
                console.log(comment_id);
                wx.getStorage({
                  key: 'nickName',
                  success: function (res) {
                    var user_name = res.data;
                    console.log(user_name);
                    console.log(" 回复 " + someone + ": " + pinglun_msg);
                    wx.request({
                      url: 'https://chengjiushuangxiang.com/Martin/tp5/public/index.php/index/wx/add_pinglun',
                      data: {
                        user_name: user_name,
                        comment_id: comment_id,
                        pinglun_msg: " 回复 " + someone + ": " + pinglun_msg,
                      },
                      success: function (res) {
                        console.log(res);
                        wx.showToast({
                          title: '正在提交',
                          icon: 'loading',
                          duration: 1000
                        })
                        that.setData({
                          hiddenmodalput2: true,
                        })
                        wx.getStorage({
                          key: 'comment_id_list',
                          success: function (res) {
                            console.log(res.data);
                            wx.request({
                              url: 'https://chengjiushuangxiang.com/Martin/tp5/public/index.php/index/wx/get_pinglun',
                              data: {
                                comment_id: res.data,
                              },
                              success: function (res) {
                                that.setData({
                                  pinglun: res.data,
                                })
                                console.log(res.data);
                              }
                            })
                          },
                        })

                      }
                    })
                  },
                })

              },
            })
          },
        })
      }
    })
  },

  input: function (e) {
    var that = this;
    wx.setStorage({
      key: 'pinglun_msg',
      data: e.detail.value,
    })
  },

  cancel2: function () {
    var that = this;
    that.setData({
      hiddenmodalput2: true,
    })
  },

  commentpinglun: function (e) {
    console.log(e);
    var that = this;
    var someone = e.currentTarget.id;
    var commentid = e.currentTarget.dataset.commentid;
    var user_name = wx.getStorageSync('nickName');
    console.log(someone);
    console.log(user_name);
    if (someone != user_name) {
      that.setData({
        hiddenmodalput2: false,
        someone: someone,
      })

    }
    wx.setStorage({
      key: 'someone',
      data: someone,
    })

    wx.setStorage({
      key: 'comment_id',
      data: commentid,
    })

  },

  cancel: function () {
    var that = this;
    that.setData({
      hiddenmodalput: true,
    })
  },

  delete_comment: function (e) {
    var that = this;
    console.log(e.currentTarget.dataset.commentid)
    var comment_id = e.currentTarget.dataset.commentid;
    var activity_id = wx.getStorageSync('activity_num');
    var gaoguan = wx.getStorageSync('gaoguan');
    wx.request({
      url: 'https://chengjiushuangxiang.com/Martin/tp5/public/index.php/index/wx/deletecomment',
      data: {
        comment_id: comment_id,
        activity_id: activity_id,
        gaoguan: gaoguan
      },
      success: function (res) {
        wx.showToast({
          title: '打卡记录已删除',
          icon: 'success',
          duration: 1000
        })
        that.onPullDownRefresh();
      }
    })
  },

  viewpic: function (e) {
    console.log("click pic")
    wx.previewImage({
      current: e.target.dataset['src'],
      urls: [e.target.dataset['src']]
    })
    console.log(e.target.dataset['src'])
  },
  baoming: function () {
    wx.navigateTo({
      url: '../activityone/activity',
    })
  },
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '超级健身营Plus',
      path: 'pages/index/index',
      imageUrl: 'https://chengjiushuangxiang.com/Martin/tp5/public/upload/ad/1.jpg',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  }

})