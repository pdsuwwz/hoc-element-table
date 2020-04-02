
<script>
export default {
  created () {
    this.$options.components = this.parent.$options.components
    this.$options.directives = this.parent.$options.directives
  },
  props: {
    parent: {
      type: Object,
      dafault () {
        return {}
      }
    },
    row: {
      type: Object,
      dafault () {
        return {}
      }
    },
    cellList: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      elementsMapping: {
        button: 'el-button'
      }
    }
  },
  computed: {
    getCellList () {
      return this.cellList.filter((cell) => cell && Object.keys(cell).length)
    }
  },
  methods: {
    getAttrsValue (item) {
      const {
        class: className,
        style,
        directives,
        ...attrs
      } = item.attrs

      return {
        class: className,
        style,
        directives: directives || [],
        props: attrs
      }
    }
  },
  render: function (createElement) {
    return createElement('div',
      this.getCellList.map((cellItem) => {
        return createElement(
          this.elementsMapping[cellItem.el],
          {
            on: {
              click: cellItem.click.bind(this.parent, this.row)
            },
            domProps: {
              innerHTML: this.getAttrsValue(cellItem).props.label
            },
            ...this.getAttrsValue(cellItem)
          }
        )
      })
    )
  }
}
</script>
