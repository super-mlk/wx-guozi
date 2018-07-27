Page({

  /**
   * 页面的初始数据
   */
  data: {
    catalogs: [
      {
        "catalogName": "资讯",
        "select": 1
      },
      {
        "catalogName": "报告",
        "select": 2
      },
      {
        "catalogName": "公司机构",
        "select": 3
      },
    ],
    catalogSelect: 1,//判断是否选中
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
  chooseCatalog: function (data) {
    var that = this;
    that.setData({//把选中值放入判断值
      catalogSelect: data.currentTarget.dataset.select
    })
  },
  quxiao: function () {
    // wx.navigateTo({
    //   // url: '../index/index',
    // })

    wx.navigateBack({ changed: true });
  }
})