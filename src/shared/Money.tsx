import { defineComponent, PropType } from 'vue'
export const Money = defineComponent({
  props: {
    value: {
      type: Number as PropType<number>,
      required: true,
    },
  },
  setup: (props, context) => {
    const addZero = (n: number) => {
      const nString = n.toString()
      const dotIndex = nString.indexOf('.')
      if (dotIndex < 0) {
        return nString + '.00'
      } else if (nString.substring(dotIndex).length === 2) {
        return nString + '0'
      } else {
        return nString
      }
    }
    return () => <span>{addZero(props.value / 100)}</span>
  },
})
