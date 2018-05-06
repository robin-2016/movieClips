//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    indicator: true,
    autoplay: true,
    swiperimages: [
      { text: "《肖申克的救赎》片段", url: "https://vide-test-1255927624.cos.ap-beijing.myqcloud.com/xsk.jpg" },
      { text: "《当幸福来敲门》片段", url: "https://vide-test-1255927624.cos.ap-beijing.myqcloud.com/dxflqm.jpg" }
    ],
    images: [
      { text: "《急速追杀》片段", url: "https://vide-test-1255927624.cos.ap-beijing.myqcloud.com/jszs01.jpg" },
      { text: "《琅琊榜》片段", url: "https://vide-test-1255927624.cos.ap-beijing.myqcloud.com/lyb01.png" },
      { text: "《杀手莱昂》片段", url: "https://vide-test-1255927624.cos.ap-beijing.myqcloud.com/ssla01.png" }
    ]
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../video/video'
    })
  },
  onLoad: function () {
  }
})
