// pages/my/achievemen/ach.js
var common=require('../../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var value = wx.getStorageSync('openid')
    console.log('个人步数天排行');
    var avaUrl = wx.getStorageSync('avatarUrl');
    wx.request({
      url: 'https://chengjiushuangxiang.com/Martin/tp5/public/index.php/index/wx/getuserinfo',     //发出请求，拿openid去找数据库user_info表
      data: {
        openid: value.data.openid,
      },
      success: function (res) {
        console.log(res);
        that.setData({
          integration: res.data.user_integral,
          avatarUrl: res.data.touxiang,
        });
      }
    })
    console.log('个人步数天排行');
    common.rank_all('https://chengjiushuangxiang.com/Martin/tp5/public/index.php/index/wx/integral', 'gral');//个人积分排行
    var a = wx.getStorageSync('gral');
    that.setData({
       data: a,
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
    console.log('个人步数天排行');
    var avaUrl = wx.getStorageSync('avatarUrl');
    wx.request({
      url: 'https://chengjiushuangxiang.com/Martin/tp5/public/index.php/index/wx/getuserinfo',     //发出请求，拿openid去找数据库user_info表
      data: {
        openid: value.data.openid,
      },
      success: function (res) {
        console.log(res);
        that.setData({
          integration: res.data.user_integral,
          avatarUrl: res.data.touxiang,
        });
      }
    })
    common.rank_all('https://chengjiushuangxiang.com/Martin/tp5/public/index.php/index/wx/integral', 'gral');//个人积分排行
    var a = wx.getStorageSync('gral');
    that.setData({
      data: a,
    })
    wx.stopPullDownRefresh();
    wx.hideNavigationBarLoading();
    wx.showToast({
      title: '刷新成功',
      icon: 'success',
      duration: 1000

    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
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