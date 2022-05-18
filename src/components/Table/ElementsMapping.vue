
<script>
import {
  defineComponent,
  getCurrentInstance,
  computed,
  ref,
  h,
  withDirectives,
  resolveDirective,
  resolveComponent
} from 'vue'
export default defineComponent({
  props: {
    parent: {
      type: Object,
      default () {
        return {}
      }
    },
    row: {
      type: Object,
      default () {
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
  setup (props) {
    const { proxy } = getCurrentInstance()
    proxy.$.components = props.parent.$options.components
    proxy.$.directives = props.parent.$options.directives

    const elementsMapping = ref({
      button: 'el-button'
    })

    const getCellList = computed(() => {
      return props.cellList.filter((cell) => cell && Object.keys(cell).length)
    })

    const getAttrsValue = (item) => {
      if (!item.attrs) {
        item.attrs = {}
      }

      const {
        class: className = null,
        style = null,
        directives = null,
        ...attrs
      } = item.attrs

      return {
        class: className,
        style,
        directives,
        props: attrs
      }
    }

    return () => {
      return h(
        'div',
        getCellList.value.map((cellItem) => {
          const comp = resolveComponent(
            elementsMapping.value[cellItem.el] ||
            cellItem.el
          )

          const attributes = getAttrsValue(cellItem)
          const { label, ...others } = attributes.props
          const { directives } = attributes

          let onClick
          if (cellItem.click) {
            onClick = cellItem.click.bind(props.parent, props.row)
          }

          let resultVNode = h(
            comp,
            {
              onClick,
              innerHTML: label,
              ...others
            }
          )

          if (directives) {
            resultVNode = withDirectives(
              resultVNode,
              [
                ...directives.map((directiveItem) => {
                  return [
                    resolveDirective(directiveItem.name),
                    directiveItem.value,
                    directiveItem.arg
                  ]
                })
              ]
            )
          }

          return resultVNode
        })
      )
    }
  }
})
</script>
