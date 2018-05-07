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
   })

   wx.getStorage({
     key: 'avatarUrl',
     success: function (res) {
       console.log(res.data);
       that.setData({
         avatarUrl: res.data,
       })
     },
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
    var that = this;
    console.log('个人步数天排行');
    common.rank_all('https://chengjiushuangxiang.com/Martin/tp5/public/index.php/index/wx/rank', 'rank');//个人步数天排行
    var a = wx.getStorageSync('rank');
    that.setData({
      data: a,
    })
    that.setData({
      heighta: ((a.length*70)+60),
    })
    console.log(a.length)
    console.log('个人步数月排行');
    common.rank_all('https://chengjiushuangxiang.com/Martin/tp5/public/index.php/index/wx/rank_personal_month', 'rank_month_personal');  //个人步数月排行
    var b = wx.getStorageSync('rank_month_personal');
    that.setData({
      data_month_personal: b,
    })
    console.log('团队天排行');
    common.rank_all('https://chengjiushuangxiang.com/Martin/tp5/public/index.php/index/wx/group_step_rank', 'group_step_rank');  //团队步数天排行
    var c = wx.getStorageSync('group_step_rank');
    that.setData({
      group_step_rank: c,
    })
    console.log('团队月排行');
    common.rank_all('https://chengjiushuangxiang.com/Martin/tp5/public/index.php/index/wx/group_step_rank_month', 'group_step_rank_month');  //团队步数月排行
    var d = wx.getStorageSync('group_step_rank_month');
    that.setData({
      group_step_rank_month: d,
    })

  },


  onPullDownRefresh: function () {
    wx.getStorage({
      key: 'avatarUrl',
      success: function (res) {
        console.log(res.data);
        that.setData({
          avatarUrl: res.data,
        })
      },
    })
      console.log('下拉刷新');
      wx.showNavigationBarLoading()
      var that = this;
   
      console.log('个人步数天排行');
      common.rank_all('https://chengjiushuangxiang.com/Martin/tp5/public/index.php/index/wx/rank', 'rank');     //个人步数天排行
      var a = wx.getStorageSync('rank');
      that.setData({
        data: a,
      })
 
      console.log('个人步数月排行');
      common.rank_all('https://chengjiushuangxiang.com/Martin/tp5/public/index.php/index/wx/rank_personal_month', 'rank_month_personal');  //个人步数月排行
      var b = wx.getStorageSync('rank_month_personal');
      that.setData({
        data_month_personal: b,
      })
     
      console.log('团队天排行');
      common.rank_all('https://chengjiushuangxiang.com/Martin/tp5/public/index.php/index/wx/group_step_rank', 'group_step_rank');  //个人步数月排行
      var c = wx.getStorageSync('group_step_rank');
      that.setData({
        group_step_rank : c,
      })

      console.log('团队月排行');
      common.rank_all_sx('https://chengjiushuangxiang.com/Martin/tp5/public/index.php/index/wx/group_step_rank_month', 'group_step_rank_month');  //团队步数月排行
      var d = wx.getStorageSync('group_step_rank_month');
      that.setData({
        group_step_rank_month: d,
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