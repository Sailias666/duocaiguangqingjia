var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    activity:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
   wx.request({
     url: 'https://m.hola-chino.cn/Martin/tp5/public/index.php/index/wx/rank_a',
     data:{

     },
     success:function(res){
       console.log('打卡系统接口',res.data);
       var data=res.data;
       that.setData({
        activity:data,
       })
       
     }
   })
  },

    onPullDownRefresh: function () {
    wx.showNavigationBarLoading();
    var that = this;
    wx.request({
      url: 'https://m.hola-chino.cn/Martin/tp5/public/index.php/index/wx/rank_a',
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
})