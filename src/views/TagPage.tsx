import { defineComponent, PropType } from 'vue';
import { RouterView } from 'vue-router';
export const TagPage = defineComponent({
  props: {
    name: {
      type: String as PropType<string>
    }
  },
  setup: (props, context) => {
    return () => (
      <RouterView />
    )
  }
})