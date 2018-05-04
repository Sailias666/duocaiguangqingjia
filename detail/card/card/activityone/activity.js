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
    pic_hidden:false,
    del_hidden:true,
  },

onLoad:function(){
  var that=this;
  console.log(wx.getStorageSync('activity_num'));
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
    sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
    sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
    success: function (res) {
      // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
      var tempFilePaths = res.tempFilePaths;
      console.log('添加图片：',res);
      that.setData({
        imageList: tempFilePaths,
        pic_hidden: true,
        del_hidden:false,
      })
    }
  })
 
  },


cleanpic: function () {
  var that = this;
  that.setData({
    pic_hidden: false,
    del_hidden: true,
    imageList:'',
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
    wx.getStorage({
      key: 'avatarUrl',
      success: function(res) {
        var avaurl = res.data;
        wx.getStorage({
          key: 'gaoguan',
          success: function (res) {
            var gaoguan = res.data;
            wx.getStorage({
              key: 'nickName',
              success: function (res) {
                console.log(res.data);
                if (openid) {
                  console.log('form发生了submit事件，携带数据为：', e.detail.value);
                  console.log('form发生了submit事件，携带数据为：', that.data.imageList);
                  console.log('form发生了submit事件，携带数据为：', wx.getStorageSync('activity_num'));
                  console.log('form发生了submit事件，携带数据为：', res.data);
                  console.log(avaurl);
                  console.log(openid);
                  console.log(gaoguan);
                  wx.uploadFile({
                    url: 'https://chengjiushuangxiang.com/Martin/tp5/public/index.php/index/wx/upload', //仅为示例，非真实的接口地址
                    filePath: that.data.imageList[0],
                    name: 'file',
                    formData: {
                      'content': e.detail.value.textarea,
                      'username': res.data,
                      'activity_id': wx.getStorageSync('activity_num'),
                      'avaurl': avaurl,
                      'openid': openid,
                      'gaoguan': gaoguan,
                    },
                    success: function (res) {
                      var data = (res.data);
                      console.log(res);
                      console.log("已经执行成功回调函数");
                      var jifen=5;
                      if (wx.getStorageSync('gaoguan') =='1'){
                        if (wx.getStorageSync('activity_num') == 888888) {
                          jifen = 15;
                        }
                        if (wx.getStorageSync('activity_num') == 2) {
                          jifen = 10;
                        }
                        if (wx.getStorageSync('activity_num') == 5) {
                          jifen = 10;
                        }
                        if (wx.getStorageSync('activity_num') == 6) {
                          jifen = 10;
                        }
                      }
                      

                      wx.showModal({
                        content: '报名成功，积分 +  '+ jifen,
                        success: function (res) {
                          if (res.confirm) {
                            console.log('用户点击确定')
                            wx.navigateBack({
                              url: '../../../../detail/card/card/card_detail/card_detail',
                            })
                          } else if (res.cancel) {
                            console.log('用户点击取消')
                          }
                        }
                      })
                    },
                    fail() {
                      wx.showToast({
                        title: '请选择需要上传的图片',
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
          }
        })
      },
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
  }
})