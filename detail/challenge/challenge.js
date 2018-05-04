Page({
  /**
   * 页面的初始数据
   */
  data: {
      challenge:'',
      currentTab: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var value = wx.getStorageSync('openid')
    wx.request({
      url: 'https://chengjiushuangxiang.com/Martin/tp5/public/index.php/index/wx/challenge',
      data: {
        openid: value.data.openid
      },
      success: function (res) {
        console.log('打卡系统接口', res.data);
        var data = res.data;
        that.setData({
          //  challenge_name:  //活动名
          //  challenge_desc:   //详情
          //  challenge_date:   //时间
          challenge: data,
        })

      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that = this;
    var value = wx.getStorageSync('openid')
    wx.request({
      url: 'https://chengjiushuangxiang.com/Martin/tp5/public/index.php/index/wx/challenge',
      data: {
        openid: value.data.openid
      },
      success: function (res) {
        console.log('打卡系统接口', res.data);
        var data = res.data;
        that.setData({
          //  challenge_name:  //活动名
          //  challenge_desc:   //详情
          //  challenge_date:   //时间
          challenge: data,
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
    var that = this;
    var value = wx.getStorageSync('openid')
    wx.request({
      url: 'https://chengjiushuangxiang.com/Martin/tp5/public/index.php/index/wx/challenge',
      data: {
        openid: value.data.openid
      },
      success: function (res) {
        console.log('打卡系统接口', res.data);
        wx.stopPullDownRefresh();
        wx.hideNavigationBarLoading();
        wx.showToast({
          title: '刷新完成',
          icon: 'success',
          duration: 1000

        })
        var data = res.data;
        that.setData({
          //  challenge_name:  //活动名
          //  challenge_desc:   //详情
          //  challenge_date:   //时间
          challenge: data,
        })

      }
    })
  }, 

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

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
   * 用户点击右上角分享
   */
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