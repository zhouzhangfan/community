Component({
  mixins: [],
  data: {
    active: 0
  },
  props: {
    items: [],
    onChangeNav: (item) => {console.log(item)}
  },
  didMount() {
  },
  didUpdate() {},
  didUnmount() {},
  methods: {
    tapNav (e) {
      if (e.target.dataset.index !== this.data.active) {
        this.setData({
          active: e.target.dataset.index
        })
        this.props.onChangeNav(this.props.items[e.target.dataset.index])
      }
    }
  },
});
