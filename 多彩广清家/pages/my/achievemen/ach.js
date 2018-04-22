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
    console.log('个人步数天排行');
    common.rank_all('https://m.hola-chino.cn/Martin/tp5/public/index.php/index/wx/integral', 'gral');//个人积分排行
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
    var that = this;
    console.log('个人步数天排行');
    common.rank_all('https://m.hola-chino.cn/Martin/tp5/public/index.php/index/wx/integral', 'gral');//个人积分排行
    var a = wx.getStorageSync('gral');
    that.setData({
      data: a,
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
    console.log('个人步数天排行');
    common.rank_all('https://m.hola-chino.cn/Martin/tp5/public/index.php/index/wx/integral', 'gral');//个人积分排行
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

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})