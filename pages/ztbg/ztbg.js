//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    navData: [
      {
        text: '全部报告'
      },
      {
        text: '人工智能'
      },
      {
        text: '会员周报'
      },
      {
        text: '产业报告'
      },
      {
        text: '动态扫描'
      },
      {
        text: '投资报告'
      },
      {
        text: '创新案列'
      },
      {
        text: '技术趋势'
      },
      {
        text: '第三方报告'
      }
    ],
    currentTab: 0,
    navScrollLeft: 0,
    reportArray:[
      {
        id: "1",
        paragraph: "重构医疗生产关系，带来商业新生态一医联体商业价值报告",
        text: " 本报告从医疗资源流动的角度入手，挖掘医联体改革的本质，深度剖析.....",
        img: "../../assets/img/report1.jpg"
      },
      {
        id: "2",
        paragraph: "德勤:健康医疗变革",
        text: '健康医疗的变革，从"规模"到"价值".....',
        img: "../../assets/img/report2.jpg"
      },
      {
        id: "3",
        paragraph: "易观:2018互联网家庭健康管理白皮书",
        text: '卫生支出逐年增加、医保压力呈刚性增长,"健康中国2030"纲领下阿斯达四大四大',
        img: "../../assets/img/report3.jpg"
      },
      {
        id: "4",
        paragraph: "银河证券: 肿瘤医疗行业深度报告",
        text: '肿瘤医疗服务市场提供给予需求两方面现状及未来发展趋势，定量测算了......',
        img: "../../assets/img/report1.jpg"
      },
      {
        id: "5",
        paragraph: "德勤: 2018民营医院投融资策略分析报告",
        text: '本报告综合一个样本量为23家民营医院的抽样调查数据，分析民营医院',
        img: "../../assets/img/report2.jpg"
      },
      {
        id: "6",
        paragraph: "医药电商行业竞争力报告",
        text: 'B2B医药电商整合上、下游资源',
        img: "../../assets/img/report3.jpg"
      },
      {
        id: "7",
        paragraph: "普华永道: y勇闯蓝海，拥抱医疗 服务行业新时代---投融资...",
        text: '卫生支出逐年增加、医保压力呈刚性增长,"健康中国2030"纲领下阿斯达四大',
        img: "../../assets/img/report4.jpg"
      },
      {
        id: "8",
        paragraph: "德勤: 2017中国医疗健康产业投资促进报告",
        text: '本报告主要关注大健康行业政策热点及投资经营状况，从行业运行情况...',
        img: "../../assets/img/report1.jpg"
      },
      {
        id: "9",
        paragraph: "毕马威: 肿瘤领域前景展望",
        text: '报告评估了生命科学企业如何调整业务和运营模式以缓解肿瘤治疗市场...',
        img: "../../assets/img/report2.jpg"
      },
    ]
  },
  //事件处理函数
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    wx.getSystemInfo({
      success: (res) => {
        this.setData({
          pixelRatio: res.pixelRatio,
          windowHeight: res.windowHeight,
          windowWidth: res.windowWidth
        })
      },
    })
  },
  switchNav(event) {
    var cur = event.currentTarget.dataset.current;
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
  },
  switchTab(event) {
    var cur = event.detail.current;
    var singleNavWidth = this.data.windowWidth / 5;
    this.setData({
      currentTab: cur,
      navScrollLeft: (cur - 2) * singleNavWidth
    });
  },
  report:function(){
    wx.navigateTo({
        url: '../ztbgxq/ztbgxq',
    })
  }
})