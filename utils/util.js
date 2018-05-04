const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}


function getopenid(){
  wx.login({
    success: function (res) {
      wx.request({
        url: 'https://chengjiushuangxiang.com/Martin/tp5/public/index.php/index/wx/getsek',
        data: {
          code: res.code,
        },
        success: function (res) {
          var openid = res.data.openid;
          console.log(openid);
          try {
            wx.setStorageSync('openid', res);
          } catch (e) {}
        }
      })
    }
  })
}

function show(a,b){
  wx.showToast({
    title: a,
    icon: b,
    duration: 2000
  })
}
function shouquanuserinfo(){
  wx.login({
    success: function (res) {
      var code = res.code;
      wx.getUserInfo({
        success: function (res) {
          console.log('用户信息', res.userInfo);
          console.log('登录请求所需code', code);
          var user = res.userInfo;
          try {     //将个人信息放入缓存
            wx.setStorageSync('userinfo', user)
            console.log('将个人信息放入缓存', user);
          } catch (e) { }
          wx.request({  //登录请求并将用户名头像上传数据库的用户信息表
            url: 'https://chengjiushuangxiang.com/Martin/tp5/public/index.php/index/wx/index',
            data: {
              code: code,
              name: user.nickName,
              touxiang: user.avatarUrl,
            },
            success: function (res) {
              try {
                wx.setStorageSync('openid', res);
                common.show('登录成功', 'success');
              } catch (e) {
              }
              console.log('首次登录授权缓存成功异步openid', res);
            },
          })
        },
      })
    }
  })
}

function clearstor(key){
  wx.removeStorage({
    key: key,
    success: function (res) {
      console.log('清除缓存成功->',key);
      console.log(res.data)
    }
  })
}

function rank_all(url,key){
  wx.request({
    url: url,
    data: '',
    header: {},
    method: 'GET',
    dataType: 'json',
    responseType: 'text',
    success: function (res) {
      var data = res.data;//数组
      wx.setStorage({
        key: key,
        data: data,
      })
      wx.getStorage({
        key: key,
        success: function (res) {
          console.log('缓存成功 ' + key);
          console.log(res.data)
        }
      })

    },
  })
} 


function rank_all_sx(url, key) {
  wx.request({
    url: url,
    data: '',
    header: {},
    method: 'GET',
    dataType: 'json',
    responseType: 'text',
    success: function (res) {
      var data = res.data;//数组
      wx.setStorage({
        key: key,
        data: data,
      })
      wx.getStorage({
        key: key,
        success: function (res) {
          console.log('缓存成功 ' + key);
          console.log(res.data)
        }
      })

    },
    complete: function () {
      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
      wx.showToast({
        title: '刷新完成',
        icon: 'success',
        duration: 1000
      })
    }
  })
} 







function setsto_nc(key,value){
  try {     //将个人信息放入缓存
    wx.setStorageSync(key, value)
    console.log('将',key,'放入缓存:', value);
  } catch (e) { }
}


module.exports = {
  formatTime: formatTime,
  getopenid: getopenid,
  show:show,
  shouquanuserinfo: shouquanuserinfo,
  clearstor: clearstor,
  rank_all_sx: rank_all_sx,
  setsto_nc: setsto_nc,
  rank_all:rank_all
}
