Page({

  /**
   * 页面的初始数据
   */
  data: {
    src: '',
    // danmuList: [
    //   {
    //     text: '第 1s 出现的弹幕',
    //     color: '#ff0000',
    //     time: 1
    //   },
    //   {
    //     text: '第 3s 出现的弹幕',
    //     color: '#ff00ff',
    //     time: 3
    //   }]
    videoSrc:"",
    listVideo:[
      {
        video: "    http://www.thinks365.cn/up/20180527/v/369f0c63-bf87-4ae5-97e4-94cc4e0f98e6.mp4"
      },
      {
        video:"http://www.thinks365.cn/up/20180505/v/79e6bb65-6404-431a-a37a-7f124cd00ac2.mp4"
      },
      {
        video:"http://www.thinks365.cn/up/20180516/v/bcb829f9-a88c-48ba-bb74-045bf81dbfdf.mp4"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    this.chooseVideo(options.videoindex);
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
 //选择视频
 chooseVideo:function(videoindex){
   var that = this;
   var video = that.data.listVideo[videoindex]["video"];
   that.setData({
     videoSrc: video
   })
 }
})