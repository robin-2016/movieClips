//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    indicator: true,
    autoplay: true,
    images: [
      "https://vide-test-1255927624.cos.ap-beijing.myqcloud.com/01.png"
    ],
    image01: "",
    image02: ""
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../video/video'
    })
  },
  onLoad: function () {
  }
})
