import { defineComponent } from 'vue';
import { RouterView } from 'vue-router';
export const Welcome = defineComponent({
  setup: (props, context) => {
    return () => (
      <div><RouterView/></div>
    )
  }
})