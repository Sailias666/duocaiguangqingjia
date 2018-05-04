var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    activity: '',
    gaoguan: true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getStorage({
      key: 'openid',
      success: function (res) {
        console.log(res.data.data.openid)
        wx.request({
          url: 'https://chengjiushuangxiang.com/Martin/tp5/public/index.php/index/wx/get_gaoguan',
          data: {
            openid: res.data.data.openid,
          },
          success: function (res) {
            console.log('高管：', res.data[0].gaoguan);
            wx.setStorage({
              key: 'gaoguan',
              data: res.data[0].gaoguan,
            })
            if (res.data[0].gaoguan == "1") {
              that.setData({
                gaoguan: false,
              })
            }

            wx.request({
              url: 'https://chengjiushuangxiang.com/Martin/tp5/public/index.php/index/wx/rank_a',
              data: {

              },
              success: function (res) {
                console.log('打卡系统接口', res.data);
                var data = res.data;
                that.setData({
                  activity: data,
                })

              }
            })
          }
        })
      },
    })

  },

  onPullDownRefresh: function () {
    wx.showNavigationBarLoading();
    var that = this;
    wx.request({
      url: 'https://chengjiushuangxiang.com/Martin/tp5/public/index.php/index/wx/rank_a',
      data: {

      },
      success: function (res) {
        wx.stopPullDownRefresh();
        wx.hideNavigationBarLoading();
        wx.showToast({
          title: '刷新成功',
          icon: 'success',
          duration: 1000

        })
        console.log('打卡系统接口', res.data);
        var data = res.data;
        that.setData({
          activity: data,
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
  }
})