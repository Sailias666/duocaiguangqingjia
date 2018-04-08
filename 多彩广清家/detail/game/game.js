// detail/game/game.js
var common=require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 页面配置  
    winWidth: 0,
    winHeight: 0,
    // tab切换 
    currentTab: 0,

    blm:'',
    flm:'',
    bad:'',
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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

    common.rank_all('http://plahui.top/index.php/wx/wx/blm', 'blm');
    var a = wx.getStorageSync('blm');
    that.setData({
      blm: a,
    })
    common.rank_all('http://plahui.top/index.php/wx/wx/flm', 'flm');
    var b = wx.getStorageSync('flm');
    that.setData({
      flm: b,
    })
    common.rank_all('http://plahui.top/index.php/wx/wx/bad', 'bad');
    var c = wx.getStorageSync('bad');
    that.setData({
      bad: c,
    })

  },
  onPullDownRefresh: function () {
    var that = this;
    console.log('下拉刷新');
    common.show('', 'loading');
    wx.showNavigationBarLoading()
  
    common.rank_all('http://plahui.top/index.php/wx/wx/blm', 'blm');
    var a = wx.getStorageSync('blm');
    that.setData({
      blm: a,
    })
    common.rank_all('http://plahui.top/index.php/wx/wx/flm', 'flm');
    var b = wx.getStorageSync('flm');
    that.setData({
      flm: b,
    })
    common.rank_all_sx('http://plahui.top/index.php/wx/wx/bad', 'bad');
    var c = wx.getStorageSync('bad');
    that.setData({
      bad: c,
    })
   
  
  },  































  onShareAppMessage: function () {
  
  },
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
  }
})