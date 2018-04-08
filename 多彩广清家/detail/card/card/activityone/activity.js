// detail/card/card/activityone/activity.js
var app=getApp();
var common=require('../../../../utils/util.js');
Page({
  /**
   * 页面的初始数据
   */
  data: {
    imageList:'',
    progressInfo: "", 
    openid:'', 
    id:'',
  },

onLoad:function(options){
  var that=this;
  this.setData({
    id: options.id
  })    
  wx.getStorage({
    key:'openid',
    success: function (res) {
    console.log('openid', res)
    that.setData({
        openid:res.data
    })
   },
   fail:function(){ //无openid 引入模板  将openid写入缓存
     var common=require('../../../../utils/util.js');
     common.getopenid();
   }
 })
},


subimg:function(){  
  var that=this;
  wx.chooseImage({   //主要是用来选择图片以及接收图片路径回调的监听
    count: 1, // 默认9
    sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
    sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
    success: function (res) {
      // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
      var tempFilePaths = res.tempFilePaths;
      console.log('添加图片：',res);
      that.setData({
        imageList: tempFilePaths,
      })
    }
  })
 
  },

  formSubmit:function(e){
    //表单提交
    common.show('', 'loading');
    var that=this;
    try {
      var value = wx.getStorageSync('openid')
      if (value) {
        console.log('获取缓存成功', value.data.openid);
      }
    } catch (e) {
      console.log('获取缓存失败', e);
    }
    var openid = value.data.openid;
    if(openid){
      console.log('form发生了submit事件，携带数据为：', e.detail.value)
      console.log('form发生了submit事件，携带数据为：', this.data.imageList)
      console.log('form发生了submit事件，携带数据为：', this.data.openid)
      wx.uploadFile({
        url: 'http://plahui.top/index.php/wx/wx/upload', //仅为示例，非真实的接口地址
        filePath: this.data.imageList[0],
        name: 'file',
        formData: {
          'user': e.detail.value.textarea,
          'openid':openid,
          'id':that.data.id,
        },
        success: function (res) {
          var data = (res.data);
          console.log(res);
          console.log("已经执行成功回调函数");
          wx.showModal({
            content: '报名成功，确认返回',
            success: function (res) {
              if (res.confirm) {
                console.log('用户点击确定')
                wx.switchTab({
                  url: '../../../../pages/index/index',
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
    } else {
      wx.showToast({
        title: '无openid',
        icon: 'none',
        duration: 3000
      })
    }
  },
})