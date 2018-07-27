var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: false,
    lookall: true,
    listArray: [
      {
        id: "1",
        img: "../../assets/img/report1.jpg",
        title: "华彬讲透孙子兵法...",
        synopsis: "华彬  浙江大学与华营咨询...",
        update: "时长: 1小时9分 / 6节课",
        extra: '1000人购买',
        money: "99$",
      },
      {
        id: "2",
        img: "../../assets/img/report2.jpg",
        title: "王立铭:生命科学5...",
        synopsis: "得到自然科学第一课",
        update: "时长: 1小时9分 / 6节课",
        extra: '1000人购买',
        money: "99$",
      },
      {
        id: "3",
        img: "../../assets/img/report3.jpg",
        title: "王立铭:生命科学5...",
        synopsis: "得到自然科学第一课",
        update: "时长: 1小时9分 / 6节课",
        extra: '1000人购买',
        money: "99$",
      },
    ],
    gbhzz:"",
    fbrq:"",
    sjly:"",
    zy:"",
    zxbh:""
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    this.setData({
      zxbh: options.zxbh
    });
    this.getInfo();
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
  lookAll: function () {
    this.setData({
      show: true,
      lookall: false
    })
  },
  // 分享
  onShareAppMessage: function (res) {
    return {
      title: '测试',
      path: '/pages/index/index'
    }
  },
  moreBtn:function(){
    wx.navigateTo({
      url: '../sqlList/sqlList',
    });
  },
  //获取具体信息
  getInfo:function(){
    var that = this;
    wx.request({
        url: app.globalData.guoziBase +'/ydyl/detail?zxbh=' + this.data.zxbh,
      success:function(e){
        that.setData({
          gbhzz: e.data.gbhzz,
          fbrq: e.data.fbrq,
          sjly: e.data.sjly,
          zy: e.data.zy,
        })
      },
      fail:function(e){
        console.log(e,22)
      }
    })
  }
})