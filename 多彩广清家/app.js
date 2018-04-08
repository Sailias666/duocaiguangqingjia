var common = require('./utils/util.js');
App({
  data:{
  },
  onLaunch: function () {
    wx.getUserInfo({
      success: function (res) {
        var userInfo = res.userInfo
        var nickName = userInfo.nickName
        var avatarUrl = userInfo.avatarUrl
        wx.setStorage({
          key: 'nickName',
          data: nickName,
          success: function (res) {
            console.log(res)
          }
        })
        wx.setStorage({
          key: 'avatarUrl',
          data: avatarUrl,
          success: function (res) {
            console.log(res)
          }
        })
      }
    })
  }
})