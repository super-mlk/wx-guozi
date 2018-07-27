Page({

    /**
     * 页面的初始数据
     */
    data: {
        sqlList: [
            {
                id: "1",
                img: "../../assets/img/report1.jpg",
                title: "国资研究专题库(6540)",
                info: "围绕新一轮国资国企改革“1+N”布局，荟萃专家精彩观点，聚合业内深度观察。",
                money:"3600元/年",
            rightPic:"../../assets/img/right.png"
            },
            {
                id: "2",
                img: "../../assets/img/report2.jpg",
                title: "国企法规法规库(1021)",
                info: "整合汇总国务院国资委、各地省市级国资委及相关委办局政策法规、改革意见、实施细则，一库在手，别无所求！",
              money: "800元/年",
              rightPic: "../../assets/img/right.png"
            },
            {
                id: "3",
                img: "../../assets/img/report3.jpg",
                title: "精品内参数据库",
                info: "直面新一轮改革的热点、痛点和难点，为您提供系列精品内参报告。每一期聚焦一个主题，每一期都是专家的倾情奉献。用最短时间、最高效率，最全解读，为您提供定制化解决方案",
              money: "1500元/年",
              rightPic: "../../assets/img/right.png"
            },
            {
                id: "4",
                img: "../../assets/img/report4.jpg",
                title: "一带一路数据平台(720)",
                info: "服务“一带一路”国家战略，配合国企走出去，收集整理沿线国家政策法规、风土人情、贸易往来、投资风险",
              money: "1200元/年",
              rightPic: "../../assets/img/right.png"
            },
            {
                id: "5",
                img: "../../assets/img/report5.jpg",
                title: "投资运营动态库",
                info: "紧跟两类公司试点进展，动态采集中央及地方国有资本投资运营公司发展动态、最新政策、创新实践",
              money: "免费",
              rightPic: "../../assets/img/right.png"
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
    sqllist: function (e) {
        if (e.currentTarget.dataset.id == 1) {
            wx.navigateTo({
                url: 'sjkejGzzt/sjkejGzzt',
            })
        } else if (e.currentTarget.dataset.id == 4) {
            wx.navigateTo({
                url: '../sjkej/sjkej',
            })
        }
    }
})