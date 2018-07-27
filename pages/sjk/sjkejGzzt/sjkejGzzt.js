// pages/expertList/expertList.js
var app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        imgUrls: [
            '../../../assets/img/banner01.jpg',
            '../../../assets/img/banner02.jpg',
            '../../../assets/img/banner03.jpg',
            '../../../assets/img/banner01.jpg',
            '../../../assets/img/banner02.jpg'
        ],
        indicatorDots: true, //是否显示面板指示点
        autoplay: true, //是否自动切换
        interval: 5000, //自动切换时间间隔,5s
        duration: 800, //  滑动动画时长1s
        indicatorcolor: "#ccc", //指示点颜色
        indicatoractivecolor: "#2da1dc", //指示点选中颜色,
        navData: [

        ],
        currentTab: 0,
        listArray: [],
        hiddenLoading: false, //loading组件,

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        this.getList();
        this.getContent();
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {
        wx.showNavigationBarLoading();
        this.getContent();
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {
        
    },

    particularsBtn: function(e) {

        var zxbh = e.currentTarget.dataset.zxbh;
        wx.navigateTo({
            url: 'sjkGzztxq/sjkGzztxq?zxbh=' + zxbh,
        })
    },
    switchNav(event) {
        var that = this;
        var cur = event.currentTarget.dataset.current;
        var flbh = event.currentTarget.dataset.current;
        //每个tab选项宽度占1/5
        var singleNavWidth = this.data.windowWidth / 5;
        //tab选项居中                            
        this.setData({
            navScrollLeft: (cur - 2) * singleNavWidth
        })
        if (this.data.currentTab == cur) {
            return false;
        } else {
            this.setData({
                currentTab: cur
            })
        }

        wx.request({
            url: app.globalData.guoziBase + '/api/gzyjztk/fl',
            data: {},
            success: function(res) {
                flbh = res.data[cur].flbh;
                wx.request({
                    url: app.globalData.guoziBase + '/api/gzyjztk/list?flbh=' + flbh,
                    data: {},
                    success: function(res) {
                        that.setData({
                            listArray: res.data
                        })
                        console.log(that.data.listArray);
                    },
                    fail: function(err) {
                        console.log(err);
                    }
                })

            },
            fail: function(err) {
                console.log(err, 2);
            }
        })
    },

    scroll: function(e) {
        // 导航栏固定
        if (e.detail.scrollTop >= "150") {
            this.setData({
                bg: "1"
            });
        } else {
            this.setData({
                bg: "0"
            });
        }



    },
    // 根据点击导航栏获取索引值，内容自动变换
    getContent: function() {
        var that = this;
        wx.request({
            url: app.globalData.guoziBase + '/api/gzyjztk/list',
            data: {},
            success: function(res) {
                that.setData({
                    listArray: res.data,
                    hiddenLoading: true
                });
            },
            fail: function(err) {
                console.log(err, 2);
            },
            complete: function() {
                setTimeout(function() {
                    // complete
                    wx.hideNavigationBarLoading() //完成停止加载
                    wx.stopPullDownRefresh() //停止下拉刷新
                }, 1500);
            }
        })
    },
    //获取接口数据--导航栏标题
    getList: function() {
        var that = this;
        wx.request({
            url: app.globalData.guoziBase + '/api/gzyjztk/fl',
            data: {},
            success: function(res) {
                // console.log(res.data, 1);
                var a = {

                    flbh: "",
                    flmc: "推荐"
                }

                var ls = new Array();
                ls.push(a);
                for (var i = 0; i < res.data.length; i++) {
                    ls.push({

                        flbh: res.data[i].flbh,
                        flmc: res.data[i].flmc
                    });
                }
                that.setData({
                    navData: ls
                })
                //   console.log(that.data.sqlList);
            },
            fail: function(err) {
                console.log(err, 2);
            }
        })
    }
})