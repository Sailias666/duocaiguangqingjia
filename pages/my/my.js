var app = getApp();
var common = require('../../utils/util.js');

const groupinfo = ['区域高管',
  '区域办公室',
  '运营管理部',
  '工程技术部',
  '成本管理部',
  '设计管理部',
  '人力资源部',
  '品牌文化部',
  '营销管理部',
  '投资拓展部',
  '客户关系管理部',
  '财务资金部',
  '采购部 ',
  '多元战略办公室',
  '广州中城市公司',
  '广州东城市公司',
  '广州南城市公司',
  '韶关城市公司',
  '清远城市公司',
  '赣州城市公司',
  '新余城市公司',
  '其他'];

Page({

  /**
   * 页面的初始数据
   */

  data: {
    integration: '0',
    hiddenmodalput:true,

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;

    try {
      var value = wx.getStorageSync('openid')    //取出缓存的openid
      if (value) {
        console.log('获取缓存成功', value.data.openid);
        var openid = value.data.openid;
        wx.request({
          url: 'https://chengjiushuangxiang.com/Martin/tp5/public/index.php/index/wx/getuserinfo',     //发出请求，拿openid去找数据库user_info表
          data: {
            openid: openid,
          },
          success: function (res) {
            console.log(res);
            that.setData({
              integration: res.data.user_integral,
              groupname: res.data.group_name,
              user_name: res.data.name,
              avatarUrl: res.data.touxiang,
            }),
              wx.setStorageSync('avatarUrl', res.data.touxiang);
            wx.setStorageSync('nickName', res.data.name);
            wx.setStorage({
              key: 'updategroupname',
              data: res.data.group_name,
            })
          }
        })
      }
    } catch (e) {
      console.log('获取缓存openid失败', e);
      common.show('错误');
    }
    var that = this;

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
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that = this;
    that.setData({
      groupinfo: groupinfo,
    })
    try {
      var value = wx.getStorageSync('openid')    //取出缓存的openid
      if (value) {
        console.log('获取缓存成功', value.data.openid);
        var openid = value.data.openid;
        wx.request({
          url: 'https://chengjiushuangxiang.com/Martin/tp5/public/index.php/index/wx/getuserinfo',     //发出请求，拿openid去找数据库user_info表
          data: {
            openid: openid,
          },
          success: function (res) {
            console.log(res);
            that.setData({
              integration: res.data.user_integral,
              groupname: res.data.group_name,
              user_name: res.data.name,
              avatarUrl: res.data.touxiang,
            }),
              wx.setStorageSync('avatarUrl', res.data.touxiang);
            wx.setStorageSync('nickName', res.data.name);
            wx.setStorage({
              key: 'updategroupname',
              data: res.data.group_name,
            })
          }
        })
      }
    } catch (e) {
      console.log('获取缓存openid失败', e);
      common.show('错误');
    }
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
    var that = this;
    wx.showNavigationBarLoading()
    that.setData({
      groupinfo: groupinfo,
    })
    try {
      var value = wx.getStorageSync('openid')    //取出缓存的openid
      if (value) {
        console.log('获取缓存成功', value.data.openid);
        var openid = value.data.openid;
        wx.request({
          url: 'https://chengjiushuangxiang.com/Martin/tp5/public/index.php/index/wx/getuserinfo',     //发出请求，拿openid去找数据库user_info表
          data: {
            openid: openid,
          },
          success: function (res) {
            console.log(res);
            that.setData({
              integration: res.data.user_integral,
              groupname: res.data.group_name,
              user_name: res.data.name,
              avatarUrl: res.data.touxiang,
            }),
              wx.setStorageSync('avatarUrl', res.data.touxiang);
            wx.setStorageSync('nickName', res.data.name);
            wx.setStorage({
              key: 'updategroupname',
              data: res.data.group_name,
            })
            wx.stopPullDownRefresh();
            wx.hideNavigationBarLoading();
            wx.showToast({
              title: '刷新成功',
              icon: 'success',
              duration: 1000

            })
          }
        })
      }
    } catch (e) {
      console.log('获取缓存openid失败', e);
      common.show('错误');
    }
    
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
  },
  goto_achi: function () {
    wx.navigateTo({
      url: './achievement/achi',
    })
  },
  goto_medal: function () {
    wx.navigateTo({
      url: './medal/medal',
    })
  },
  qidai: function () {
    wx.showToast({
      title: '敬请期待',
      icon: 'success',
      duration: 1000
    })
  },

  editinfo:function(){
    var that = this;
    that.setData({
      hiddenmodalput:false,
      groupinfo: groupinfo,
    })
  },
  bindPickerChange: function (e) {
    console.log("点击分组");
    var that = this;
    var group = groupinfo;
    that.setData({
      index: e.detail.value,
    })
    wx.setStorage({
      key: 'updategroupname',
      data: group[e.detail.value],
    })
    console.log(group[e.detail.value]);
  },
  bindinput:function(e){
    wx.setStorage({
      key: 'updatename',
      data: e.detail.value,
    })

  },
  confirm: function () {
    var that = this;
    var openid = wx.getStorageSync('openid').data['openid'];
    var groupname = wx.getStorageSync('updategroupname');
    var updatename = wx.getStorageSync('updatename');
    if(updatename==''){
      updatename=wx.getStorageSync("nickName");
    }
    if(groupname==''){
      groupname = wx.getStorageSync("groupname");
    }
    console.log(openid);
    console.log(groupname);
    console.log("updatename:  " + updatename);
    wx.request({
      url: 'https://chengjiushuangxiang.com/Martin/tp5/public/index.php/index/wx/editinfo',
      data: {
        openid: openid,
        user_name: updatename,
        group_name: groupname,
      },
      success: function (res) {
        console.log(res);
        that.setData({
          hiddenmodalput: true,
          user_name: updatename,
          groupname: groupname,
        })
        wx.showToast({
          title: '更新个人信息成功',
          icon: 'success',
          duration: 1000
        })
      }
    })
    that.onPullDownRefresh();
  },

  cancel: function () {

    var that = this;
    that.setData({
      hiddenmodalput: true,
    })
  },

  goto_ach: function () {
    wx.navigateTo({
      url: './achievemen/ach',
    })
  }
})
