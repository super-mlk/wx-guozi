// pages/purchased/purchased.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    purcharseArray:[
      {
        id:"1",
        img:"../../assets/img/report1.jpg",
        title:"数据库标题",
        introduce:"数据库介绍数据库介绍数据库介绍数据库介绍数据库介绍数据库介绍",
        num:"1000"
      }
    ],
    listArray:[
      {
        id : "1",
        pic: "../../assets/img/report1.jpg",
        title:"新用户专享:心理学知识礼包",
        time:"10分10秒"
      },
      {
        id: "2",
        pic: "../../assets/img/report2.jpg",
        title: "新用户专享:心理学知识礼包",
        time: "10分10秒"
      },
      {
        id: "3",
        pic: "../../assets/img/report3.jpg",
        title: "新用户专享:心理学知识礼包",
        time: "10分10秒"
      },
    ],
    current:"1",
    jiantou:'../../assets/img/down.png',
    list:"../../assets/img/list2.png",
    gou:"../../assets/img/gou.png",
    goucurrent:"1",
    select:'',
    recentinfo:"最近购买"
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
  change:function(res){
    var that = this;
    var changeimgPath = "../../assets/img/list2.png";
    var changeimgPath2 = "../../assets/img/change.png";
    if (that.data.current == "1"){
      that.setData({
        current : "0",
        list: changeimgPath2
      });
    }else{
      that.setData({
        current: "1",
        list: changeimgPath
      });
    }
  },
  changeState:function(res){
    var that = this;
    var imgPathup = "../../assets/img/up.png";
    var imgPathDown = "../../assets/img/down.png";
    that.setData({
      jiantou: imgPathup,
      select: true
    });
  },
  recentbtn:function(res){
    var that = this;
    var goustate = res.currentTarget.dataset.postid;
    that.setData({
      goucurrent: goustate,
      recentinfo: res.currentTarget.dataset.title,
      select: false,
      jiantou: '../../assets/img/down.png'
    });
  },
  onlineyulanClick:function(){
    console.log("1");
    wx.navigateTo({
      url: '../out/out',
    })
  }

})