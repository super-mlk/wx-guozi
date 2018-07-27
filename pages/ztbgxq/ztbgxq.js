Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: '',
    show:true,
    hide:false,
    modalHidden: true,//是否隐藏对话框  ,
    searchinput:"",//输入框为空,
    one:'10￥',
    two: '20￥',
    three: '30￥',
    four: '40￥',
    five: '50￥',
    six: '60￥',
    bg:''
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
  /*** 滑动切换tab***/
  bindChange: function (e) {
    var that = this;
    that.setData({ currentTab: e.detail.current });
  },
  /*** 点击tab切换***/
  swichNav: function (e) {
    var that = this;
    that.setData({
      currentTab: e.target.dataset.current
    });
  },
  homeBtn:function(){
    wx.switchTab({
      url: '../index/index',
    })
  },
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '自定义转发标题',
      path: '/page/user?id=123'
    }
  },
  onShareAppMessage: function (res) {
    return {
      title: '测试',
      path: '/pages/index/index'
    }
  },
  //事件处理函数  
  bindViewTap: function () {
    this.setData({
      modalHidden: !this.data.modalHidden,
      searchinput:''
    })

  },
  //确定按钮点击事件  
  modalBindaconfirm: function () {
    this.setData({
      modalHidden: !this.data.modalHidden,
    })
  },
  //取消按钮点击事件  
  modalBindcancel: function () {
    this.setData({
      modalHidden: !this.data.modalHidden,
    })
  },  
  // 打赏金额
  ptClick:function(e){
    this.setData({
      bg: e.target.dataset.num,
      searchinput:e.target.dataset.money
    });
    console.log(e.target.dataset.num);
  }
})