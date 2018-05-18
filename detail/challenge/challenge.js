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

        wx.request({
          url: 'https://chengjiushuangxiang.com/Martin/tp5/public/index.php/index/wx/rank_yingxiong',
          data: {
          },
          success: function (res) {
            that.setData({
              data: res.data,
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

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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
        wx.request({
          url: 'https://chengjiushuangxiang.com/Martin/tp5/public/index.php/index/wx/rank_yingxiong',
          data: {
          },
          success: function (res) {
            that.setData({
              data: res.data,
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
  baoming: function (e) {
    //表单提交
    //   common.show('', 'loading');
    var that = this;
    var activitynum = e.currentTarget.dataset.activitynum;
    try {
      var value = wx.getStorageSync('openid')
      if (value) {
        console.log('获取缓存成功', value.data.openid);
      }
    } catch (e) {
      console.log('获取缓存失败', e);
      wx.showToast({
        title: '获取缓存失败',
        icon: 'none',
        duration: 2000
      })
    }
    var openid = value.data.openid;
    wx.request({
      url: 'https://chengjiushuangxiang.com/Martin/tp5/public/index.php/index/wx/baoming', //报名接口
      data: {
        openid: openid,
        activitynum: activitynum,
      },
      success: function (res) {
        console.log(res);
        console.log("已经执行成功回调函数");
        wx.showModal({
          content: '报名成功，确认返回',
          success: function (res) {
            that.setData({
              a_button: true,
              b_button: false,
            })
            if (res.confirm) {
              console.log('用户点击确定')
              that.onPullDownRefresh();
            } else if (res.cancel) {
              console.log('用户点击取消')
            }
          }
        })
      },
      fail() {
        wx.showToast({
          title: '提交失败',
          icon: 'none',
          duration: 3000
        })
      }
    })
  },
baomingImp:function(e){
  if(e.currentTarget.dataset.baoming == 1){
    this.baoming(e);
  }else{
    this.baoming2();
  }
},
  baoming2: function () {
    wx.showToast({
      title: '已报名',
      icon: 'success',
      duration: 1000
    })
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