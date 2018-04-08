var common=require('../../utils/util.js');
Page({

  data: {
   
  },

 yz:function(e){
   common.show('', 'loading');
   var that = this;
   try {
     var value = wx.getStorageSync('openid')
     if (value) {
       console.log('获取缓存成功', value.data.openid);
     }
   } catch (e) {
     console.log('获取缓存失败', e);
   }
   var openid = value.data.openid;
   if (openid) {
     console.log('form发生了submit事件，携带数据为：', e.detail.value.text)
     console.log('form发生了submit事件，携带数据为：',openid)
     wx.request({
       url: 'http://plahui.top/index.php/wx/wx/yzsubmit', //仅为示例，非真实的接口地址
       name: 'file',
       data: {
         'group': e.detail.value.text,
         'openid': openid,
       },
       success: function (res) {
         var data = (res.data);
         console.log(res);
         console.log("已经执行成功回调函数");
         wx.showModal({
           content: '成功，确认返回',
           success: function (res) {
             if (res.confirm) {
               console.log('用户点击确定')
               wx.switchTab({
                 url: '../index/index',
               })
             } else if (res.cancel) {
               console.log('用户点击取消')
             }
           }
         })
       }
     })
 }
 }

})










