Component({
  mixins: [],
  data: {
    scrollLeft: 0,
    TabCur: 0,
    posts: [
      {  }
    ]
  },
  props: {},
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    tabSelect(e) {
      this.setData({
        TabCur: e.currentTarget.dataset.id,
        scrollLeft: (e.currentTarget.dataset.id-1)*60
      })
    }
  },
});
