import { defineComponent, PropType } from 'vue';
export const TagEdit = defineComponent({
  props: {
    name: {
      type: String as PropType<string>
    }
  },
  setup: (props, context) => {
    return () => (
      <div>edit</div>
    )
  }
})