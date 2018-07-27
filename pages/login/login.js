Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
  onShareAppMessage: function () {
    
  },
  // 登录
  login:function(){
    console.log("1");
    wx.showModal({
      title: '微信登录授权',
      content: '申请获得以下权限\r\n获得你的公开信息(昵称、头像等)',
      success: function (res) {
        if (res.confirm) {
          wx.navigateTo({
            url: '../customer/customer',
          })
        } else if (res.cancel) {
          console.log('用户点击取消');
        }
      }
    })
    // wx.login({
    //   success: function (res) {
    //     // console.log(res.code);
    //     wx.showModal({
    //       title: '微信登录授权',
    //       content: '申请获得以下权限\r\n获得你的公开信息(昵称、头像等)',
    //       success: function (res) {
    //         if (res.confirm) {
    //           wx.navigateTo({
    //             url: '../personalCenter/personalCenter',
    //           })
    //         } else if (res.cancel) {
    //           console.log('用户点击取消');
    //         }
    //       }
    //     })
    //     //发送请求
    //     // wx.request({
    //     //   url: 'http://192.168.55.105/code.php', //仅为示例，并非真实的接口地址
    //     //   data: {
    //     //     code: res.code
    //     //   },
    //     //   header: {
    //     //     'content-type': 'application/json' // 默认值
    //     //   },
    //     //   success: function (res) {
    //     //     console.log(res, 100);
    //     //     wx.showModal({
    //     //       title: '微信登录授权',
    //     //       content: '申请获得以下权限\r\n获得你的公开信息(昵称、头像等)',
    //     //       success: function (res) {
    //     //         if (res.confirm) {
    //     //           wx.navigateTo({
    //     //             url: '../personalCenter/personalCenter',
    //     //           })
    //     //         } else if (res.cancel) {
    //     //           console.log('用户点击取消');
    //     //         }
    //     //       }
    //     //     })
    //     //   }
    //     // });
    //   },
    //   fail: function () {
    //     wx.showToast({
    //       title: '登录失败',
    //     })
    //   }
    // });
   
  }
})