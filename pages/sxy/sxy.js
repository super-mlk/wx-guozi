var imgup = "../../assets/img/up.png";
var imgDown = "../../assets/img/down.png";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listArray: [
      {
        id: "1",
        title: "标题:2016年总结报告",
        time: "时间:10:10",
        img: "http://www.thinks365.cn/up/20180527/b/bc9f9528-5761-4756-a2e4-ae92dc23a3cd.jpg",
        name: "马云",
        companyInfo: "阿里巴巴"
      },
      {
        id: "2",
        title: "标题:2016年总结报告",
        time: "时间:10:10",
        img: "http://www.thinks365.cn/up/20180516/b/42ef8e60-78c7-4ef8-a349-656eb0d08a75.jpg",
        name: "刘强东",
        companyInfo: "京东"
      },

      {
        id: "3",
        title: "标题:2016年总结报告",
        time: "时间:10:10",
        img: "http://www.thinks365.cn/up/20180516/b/f582a80b-7a96-4a7c-90ca-3b7706d18586.jpg",
        name: "苏宁",
        companyInfo: "苏宁电器"
      }
    ],
    jiantou1: '../../assets/img/down.png',
    jiantou2: '../../assets/img/down.png',
    jiantou3: '../../assets/img/down.png',
    bg: '1',
    // bg2:'11',
    // bg3:'21',
    tabbg: '',
    show: '',
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
  onlineVideo: function (e) {
    // console.log(e.currentTarget.dataset.videonum);
    var videoId = e.currentTarget.dataset.videonum;
    wx.navigateTo({
        url: '../sxyxq/sxyxq?videoindex=' + videoId,
    });
  },
  menuClick: function (e) {
    this.setData({
      bg: e.target.dataset.num,
      show: 0,
      tabbg: 0,
      jiantou1: imgDown,
      jiantou2: imgDown,
      jiantou3: imgDown,
    });
  },
  tabClick: function (e) {
    this.setData({
      tabbg: e.target.dataset.tabnum,
    });
    if (e.target.dataset.tabnum == 1) {
      this.setData({
        jiantou1: imgup,
        jiantou2: imgDown,
        jiantou3: imgDown,
        show: 1,
      });

    } else if (e.target.dataset.tabnum == 2) {
      this.setData({
        jiantou2: imgup,
        jiantou1: imgDown,
        jiantou3: imgDown,
        show: 2,
      });

    } else {
      this.setData({
        jiantou3: imgup,
        jiantou1: imgDown,
        jiantou2: imgDown,
        show: 3,
      });
    }
  },
})