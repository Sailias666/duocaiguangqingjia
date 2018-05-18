// detail/challenge/challenge_detail/challenge_detail.js
var common=require('../../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
  data:'',
  id:'',
  baoming:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    this.setData({
      id: options.id,
    }) 
    if (options.baoming.substring(3, 6)!=''){
      that.setData({
        baoming : options.baoming.substring(3, 6),
        a_button: true,
        b_button: false,
      }) 
    }else{
      that.setData({
        baoming: '我要报名',
        a_button: false,
        b_button: true,
      }) 
    }
    wx.request({
      url: 'https://chengjiushuangxiang.com/Martin/tp5/public/index.php/index/wx/challenge_in',
      data: {
        id: options.id,
      },
      method: 'GET',
      success:function(res){
        console.log('挑战项目******',res);
        //console.log(res.data[0].name);
        that.setData({
          data:res.data
        })
      }
    })
  },






  baoming: function (e) {
    //表单提交
 //   common.show('', 'loading');
    var that = this;
    try {
      var value = wx.getStorageSync('openid')
      if (value) {
        console.log('获取缓存成功', value.data.openid);
      }
    } catch (e) {
      console.log('获取缓存失败', e);
      wx.showToast({
        title: '无openid',
        icon: 'none',
        duration: 3000
      })
    }
    var openid = value.data.openid;
    wx.request({
      url: 'https://chengjiushuangxiang.com/Martin/tp5/public/index.php/index/wx/baoming', //报名接口
        data: {
          openid:openid,
          activitynum: that.data.id,
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
                wx.navigateBack({
                  url: '../../../detail/challenge/challenge_detail/challenge_detail',
                })
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

  baoming2:function(){
    wx.showToast({
      title: '已报名',
      icon: 'success',
      duration: 1000
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
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
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