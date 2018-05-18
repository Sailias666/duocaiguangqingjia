// detail/rank/rank.js
var common=require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data:'',
    data_month_personal:'',
    group_step_rank:'',
    group_step_rank_month:'',
    avatarUrl:'',
    winWidth: 0,
    winHeight: 0,
    // tab切换 
    currentTab: 0,
    yundong_jifen:0,
    yundong_paiming:0,
  },

 onLoad:function(){
   var that = this;
   // 获取系统信息 
   wx.getSystemInfo({
     success: function (res) {
       that.setData({
         winWidth: res.windowWidth,
         winHeight: res.windowHeight
       });
     }
   });
   wx.getStorage({
     key: 'nickName',
     success: function (res) {
       that.setData({
         user_name: res.data,
       })
     },
   });

   wx.getStorage({
     key: 'avatarUrl',
     success: function (res) {
       console.log(res.data);
       that.setData({
         avatarUrl: res.data,
       })
     },
   })

   var that = this;
   console.log('个人步数天排行');
   wx.request({
     url: 'https://chengjiushuangxiang.com/Martin/tp5/public/index.php/index/wx/rank',
     success: function (res) {
       that.setData({
         data: res.data,
       })
     }
   })
   wx.request({
     url: 'https://chengjiushuangxiang.com/Martin/tp5/public/index.php/index/wx/rank_personal_month',
     success: function (res) {
       that.setData({
         data_month_personal: res.data,
       })
     }
   })
   wx.request({
     url: 'https://chengjiushuangxiang.com/Martin/tp5/public/index.php/index/wx/group_step_rank',
     success: function (res) {
       that.setData({
         group_step_rank: res.data,
       })
     }
   })
   wx.request({
     url: 'https://chengjiushuangxiang.com/Martin/tp5/public/index.php/index/wx/group_step_rank_month',
     success: function (res) {
       that.setData({
         group_step_rank_month: res.data,
       })
     }
   })
   

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
  onShow: function () {
    
  },


  onPullDownRefresh: function () {
    var that=this;
      console.log('下拉刷新');
      wx.showNavigationBarLoading()
      wx.request({
        url: 'https://chengjiushuangxiang.com/Martin/tp5/public/index.php/index/wx/rank',
        success: function (res) {
          that.setData({
            data: res.data,
          })
          wx.request({
            url: 'https://chengjiushuangxiang.com/Martin/tp5/public/index.php/index/wx/rank_personal_month',
            success: function (res) {
              that.setData({
                data_month_personal: res.data,
              })

              wx.request({
                url: 'https://chengjiushuangxiang.com/Martin/tp5/public/index.php/index/wx/group_step_rank',
                success: function (res) {
                  that.setData({
                    group_step_rank: res.data,
                  })
                  wx.request({
                    url: 'https://chengjiushuangxiang.com/Martin/tp5/public/index.php/index/wx/group_step_rank_month',
                    success: function (res) {
                      that.setData({
                        group_step_rank_month: res.data,
                      })
                      wx.hideNavigationBarLoading();
                      wx.stopPullDownRefresh();
                      wx.showToast({
                        title: '刷新成功',
                        icon: 'success',
                        duration: 2000
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
  },
  
})