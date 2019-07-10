Component({
  mixins: [],
  data: {},
  props: {
    onTap: () => {
      dd.navigateTo({
        url: '/pages/create-issue/create-issue'
      })
    }
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    onTap () {
      this.props.onTap()
    }
  },
});
