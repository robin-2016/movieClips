//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    indicator: true,
    autoplay: true,
    swiperimages: [
      { id: "xskdjs", text: "《肖申克的救赎》片段", url: "https://vide-test-1255927624.cos.ap-beijing.myqcloud.com/xsk.jpg", videourl: "http://1255927624.vod2.myqcloud.com/87a9bad2vodtransgzp1255927624/b1be43e27447398156451126121/v.f30.mp4",descript:"安迪在狱中备受折磨，在这次户外工作中第一次展示了自己的价值，开始了改变自己在狱中的境地……" },
      {
        id: "dxflqm", text: "《当幸福来敲门》片段", url: "https://vide-test-1255927624.cos.ap-beijing.myqcloud.com/dxflqm.jpg",
        videourl: "http://1255927624.vod2.myqcloud.com/87a9bad2vodtransgzp1255927624/64e68fa57447398156450143090/v.f30.mp4", descript: "克里斯·加德纳生活非常的糟糕，妻子不再相信自己，要离开，一方面自己独立抚养儿子，另一方面为了面试股票经纪人而努力着……"
      }
    ],
    images: [
      {
        id: "jszs", text: "《急速追杀》片段", url: "https://vide-test-1255927624.cos.ap-beijing.myqcloud.com/jszs01.jpg",
        videourl: "http://1255927624.vod2.myqcloud.com/87a9bad2vodtransgzp1255927624/349529b97447398156449464564/v.f30.mp4", descript: "退休杀手约翰·威克被迫复出，非常的震撼，特别是在地下室打开箱子的那一段……"
      },
      {
        id: "lyb", text: "《琅琊榜》片段", url: "https://vide-test-1255927624.cos.ap-beijing.myqcloud.com/lyb01.png",
        videourl: "http://1255927624.vod2.myqcloud.com/87a9bad2vodtransgzp1255927624/6991066a7447398156450343930/v.f30.mp4", descript: "琅琊榜我看过好几遍了，每次看内心会变得平静。这一段是梅长苏刚刚入京。"
      },
      {
        id: "ssla", text: "《杀手莱昂》片段", url: "https://vide-test-1255927624.cos.ap-beijing.myqcloud.com/ssla01.png",
        videourl: "http://1255927624.vod2.myqcloud.com/87a9bad2vodtransgzp1255927624/2b1b344a7447398156449042314/v.f30.mp4", descript: "时间过去了好久，再回头看《杀手莱昂》的剪辑很有特点，非常巧妙的展示了莱昂高超的杀手技巧。"
      }
    ]
  },
  //事件处理函数
  bindImage: function (e) {
    var urlid = e.target.id
    var simages = this.data.swiperimages
    var images = this.data.images
    // console.log(urlid)
    for(var i in simages){
      if (simages[i].id == urlid){
        app.globalData.vtext = simages[i].text
        app.globalData.videourl = simages[i].videourl
        app.globalData.descript = simages[i].descript
        // console.log(app.globalData.videourl)
        wx.navigateTo({
          url: '../video/video'
        })
        break 
      }            
    }
    for (var i in images) {
      if (images[i].id == urlid) {
        app.globalData.vtext = images[i].text
        app.globalData.videourl = images[i].videourl
        app.globalData.descript = images[i].descript
        // console.log(app.globalData.videourl)
        wx.navigateTo({
          url: '../video/video'
        })
        break
      }
    }
  },
  onLoad: function () {
  },
  onShareAppMessage: function () {

  }
})
