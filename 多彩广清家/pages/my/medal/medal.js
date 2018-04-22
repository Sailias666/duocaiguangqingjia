// pages/my/medal/medal.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  num:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    try {
      var value = wx.getStorageSync('openid')    //取出缓存的openid
      if (value) {
        console.log('获取缓存成功', value.data.openid);
        var openid = value.data.openid;
        wx.request({
          url: 'https://m.hola-chino.cn/Martin/tp5/public/index.php/index/wx/chengjiu',     //发出请求，拿openid去找数据库
          data: {
            openid: openid,
          },
          success: function (res) {
            that.setData({
              num:res.data,
            })
          }
        })
      }
    } catch (e) {
      console.log('获取缓存openid失败,徽章不能加载', e);
      common.show('错误');
    }
    var that = this;
    wx.getStorage({
      key: 'avatarUrl',
      success: function (res) {
        console.log('url', res);
        that.setData({
          avatarUrl: res.data,
        })
      },
    })
    wx.getStorage({
      key: 'nickName',
      success: function (res) {
        that.setData({
          user_name: res.data,
        })
      },
    })
   
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   * 
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
      title: '多彩广清家',
      path: 'pages/my/medal/medal',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  }
})