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
    }),

    common.rank_all('https://chengjiushuangxiang.com/Martin/tp5/public/index.php/index/wx/blm', 'blm');
    var a = wx.getStorageSync('blm');
    that.setData({
      blm: a,
    })
    common.rank_all('https://chengjiushuangxiang.com/Martin/tp5/public/index.php/index/wx/flm', 'flm');
    var b = wx.getStorageSync('flm');
    that.setData({
      flm: b,
    })
    common.rank_all('https://chengjiushuangxiang.com/Martin/tp5/public/index.php/index/wx/bad', 'bad');
    var c = wx.getStorageSync('bad');
    that.setData({
      bad: c,
      bad_num: c.size,
    })

  },
  onPullDownRefresh: function () {
    var that = this;
    console.log('下拉刷新');
    common.show('', 'loading');
    wx.showNavigationBarLoading()
  
    common.rank_all('https://chengjiushuangxiang.com/Martin/tp5/public/index.php/index/wx/blm', 'blm');
    var a = wx.getStorageSync('blm');
    that.setData({
      blm: a,
    })
    common.rank_all('https://chengjiushuangxiang.com/Martin/tp5/public/index.php/index/wx/flm', 'flm');
    var b = wx.getStorageSync('flm');
    that.setData({
      flm: b,
    })
    common.rank_all_sx('https://chengjiushuangxiang.com/Martin/tp5/public/index.php/index/wx/bad', 'bad');
    var c = wx.getStorageSync('bad');
    that.setData({
      bad: c,
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