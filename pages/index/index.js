Page({
  data: {
    items: [
      { title: '看帖', name: 'post', icon: 'attention' },
      { title: '排行榜', name: 'rank', icon: 'rank' },
      { title: '板块', name: 'forum', icon: 'circle' },
      { title: '我的', name: 'my', icon: 'people' }
    ],
    activeName: 'post'
  },
  onChangeNav (item) {
    this.setData({
      activeName: item.name
    })
  }
});
