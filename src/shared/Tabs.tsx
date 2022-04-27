import { defineComponent, PropType } from 'vue';
import s from './Tabs.module.scss';
export const Tabs = defineComponent({
  props: {
    selected: {
      type: String as PropType<string>,
      required: false,
    },
    onUpdateSelected: {
      type: Function as PropType<(name: string) => void>,
      required: false,
    }
  },
  setup: (props, context) => {
    return () => {
      const array = context.slots.default?.()
      console.log(array)
      if (!array) return () => null
      for (let i = 0; i < array.length; i++) {
        if (array[i].type !== Tab) {
          throw new Error('<Tabs> only accepts <Tab> as children')
        }
      }
      return <div class={s.tabs}>
        <ol class={s.tabs_nav}>
          {array.map(item =>
            <li class={item.props?.name === props.selected ? s.selected : ''}
              onClick={() => context.emit('update:selected', item.props?.name)}
            >
              {item.props?.name}
            </li>)}
        </ol>
        <div>

        </div>
      </div>
    }
  }
})

export const Tab = defineComponent({
  props: {
    name: {
      type: String as PropType<string>
    }
  },
  setup: (props, context) => {
    return () => (
      <div>{context.slots.default?.()}</div>
    )
  }
})
