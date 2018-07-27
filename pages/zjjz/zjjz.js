// pages/expertList/expertList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listArray: [
      {
        id: "1",
        img: "../../assets/img/report1.jpg",
        title: "华彬讲透孙子兵法...",
        synopsis: "华彬  浙江大学与华营咨询...",
        update: "这回彻底理解《孙子兵法》",
        extra: '05 谋功篇：韩信该死,拿破仑',
        purchase: '1000人购买',
        money: "99$",
        course: "/30讲"
      },
      {
        id: "2",
        img: "../../assets/img/report2.jpg",
        title: "王立铭:生命科学5...",
        synopsis: "得到自然科学第一课",
        update: "7小时更新",
        extra: '特别放送 | 接招熊逸: 后天的经...',
        purchase: '1000人购买',
        money:"99$",
        course:"/30讲"
      },
      {
        id: "3",
        img: "../../assets/img/report3.jpg",
        title: "王立铭:生命科学5...",
        synopsis: "得到自然科学第一课",
        update: "7小时更新",
        extra: '特别放送 | 接招熊逸: 后天的经...',
        purchase: '1000人购买',
        money: "99$",
        course: "/30讲"
      },
      {
        id: "4",
        img: "../../assets/img/report4.jpg",
        title: "王立铭:生命科学5...",
        synopsis: "得到自然科学第一课",
        update: "7小时更新",
        extra: '特别放送 | 接招熊逸: 后天的经...',
        purchase: '1000人购买',
        money: "99$",
        course: "/30讲"
      },
      {
        id: "5",
        img: "../../assets/img/report1.jpg",
        title: "华彬讲透孙子兵法...",
        synopsis: "华彬  浙江大学与华营咨询...",
        update: "这回彻底理解《孙子兵法》",
        extra: '05 谋功篇：韩信该死,拿破仑',
        purchase: '1000人购买',
        money: "99$",
        course: "/30讲"
      },
      {
        id: "6",
        img: "../../assets/img/report2.jpg",
        title: "王立铭:生命科学5...",
        synopsis: "得到自然科学第一课",
        update: "7小时更新",
        extra: '特别放送 | 接招熊逸: 后天的经...',
        purchase: '1000人购买',
        money: "99$",
        course: "/30讲"
      },
      {
        id: "7",
        img: "../../assets/img/report3.jpg",
        title: "王立铭:生命科学5...",
        synopsis: "得到自然科学第一课",
        update: "7小时更新",
        extra: '特别放送 | 接招熊逸: 后天的经...',
        purchase: '1000人购买',
        money: "99$",
        course: "/30讲"
      },
      {
        id: "8",
        img: "../../assets/img/report4.jpg",
        title: "王立铭:生命科学5...",
        synopsis: "得到自然科学第一课",
        update: "7小时更新",
        extra: '特别放送 | 接招熊逸: 后天的经...',
        purchase: '1000人购买',
        money: "99$",
        course: "/30讲"
      }
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
  particularsBtn:function(){
    wx.navigateTo({
      url: '../zjjzxq/zjjzxq',
    })
  }

})