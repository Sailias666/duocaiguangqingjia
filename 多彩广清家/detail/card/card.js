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
     url: 'http://plahui.top/index.php/wx/wx/rank_a',
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
  }
})