Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '../../assets/img/banner01.jpg',
      '../../assets/img/banner02.jpg',
      '../../assets/img/banner03.jpg',
      '../../assets/img/banner01.jpg',
      '../../assets/img/banner02.jpg'
    ],
    indicatorDots: true, //是否显示面板指示点
    autoplay: true, //是否自动切换
    interval: 5000, //自动切换时间间隔,5s
    duration: 800, //  滑动动画时长1s
    indicatorcolor: "#ccc", //指示点颜色
    indicatoractivecolor: "#2da1dc", //指示点选中颜色,
    newInformation: [
      {
        id: "1",
        paragraph: "重构医疗生产关系，带来商业新生态一医联体商业价值报告",
        text: " 本报告从医疗资源流动的角度入手，挖掘医联体改革的本质，深度剖析.....",
        img: "../../assets/img/report1.jpg"
      },
      {
        id: "2",
        paragraph: "德勤: 健康医疗的变革",
        text: " 本 健康医疗的变革,从'规模' 到 '价值'。",
        img: "../../assets/img/report4.jpg"
      },
      {
        id: "3",
        paragraph: "重构医疗生产关系，带来商业新生态一医联体商业价值报告",
        text: " 本报告从医疗资源流动的角度入手，挖掘医联体改革的本质，深度剖析.....",
        img: "../../assets/img/report2.jpg"
      },
    ],
    newReport:[
      {
        id: "1",
        paragraph: "重构医疗生产关系，带来商业新生态一医联体商业价值报告",
        text: " 本报告从医疗资源流动的角度入手，挖掘医联体改革的本质，深度剖析.....",
        img: "../../assets/img/report1.jpg"
      },
      {
        id: "2",
        paragraph: "德勤: 健康医疗的变革",
        text: " 本 健康医疗的变革,从'规模' 到 '价值'。",
        img: "../../assets/img/report4.jpg"
      },
      {
        id: "3",
        paragraph: "重构医疗生产关系，带来商业新生态一医联体商业价值报告",
        text: " 本报告从医疗资源流动的角度入手，挖掘医联体改革的本质，深度剖析.....",
        img: "../../assets/img/report3.jpg"
      },
    ]
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
  report: function () {
    wx.navigateTo({
      url: '../ztbg/ztbg',
    })
  },
  search: function () {
    wx.navigateTo({
      url: '../search/search',
    })
  },
  reconsitutionMedical: function () {
    wx.navigateTo({
        url: '../ztbgxq/ztbgxq',
    })
  },
  newInformation:function(){
    wx.navigateTo({
        url: '../zjjz/zjjz',
    })
  },
  specialistBtn:function(){
    wx.navigateTo({
      url: '../zjjz/zjjz',
    })
  },
  bannerClick:function(){
    wx.navigateTo({
        url: '../zjjz/zjjz',
    })
  }
})