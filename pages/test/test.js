let app = getApp();
Page({
  data: {
    corpId: '',
    authCode: '',
    user: null
  },
  onLoad(query) {
    // 页面加载
    console.info(`Page onLoad with query: ${JSON.stringify(query)}`)
  },
  onReady() {
    // 页面加载完成
    this.setData({
      corpId: app.globalData.corpId
    })
    let _this = this
    dd.getAuthCode({      
      success:function(res){
        _this.setData({
          authCode: res.authCode
        })
        dd.httpRequest({
          headers: {
            "Content-Type": "application/json"
          },
          url: 'http://127.0.0.1:3001/api/getUserInfo',
          method: 'POST',
          data: JSON.stringify({
            code: _this.data.authCode
          }),
          dataType: 'json',
          success: function(res) {
            _this.setData({
              user: res.data
            })
          },
          fail: function(res) {
            dd.alert({content: 'fail'});
          }
        });
      },
      fail:function(err){
      }
    })
  },
  onShow() {
    // 页面显示
  },
  onHide() {
    // 页面隐藏
  },
  onUnload() {
    // 页面被关闭
  },
  onTitleClick() {
    // 标题被点击
  },
  onPullDownRefresh() {
    // 页面被下拉
  },
  onReachBottom() {
    // 页面被拉到底部
  },
  onShareAppMessage() {
    // 返回自定义分享信息
    return {
      title: 'My App',
      desc: 'My App description',
      path: 'pages/index/index',
    };
  }
});
