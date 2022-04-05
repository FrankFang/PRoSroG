import { defineComponent } from 'vue';
export const First = defineComponent({
  setup: (props, context) => {
    return () => (
      <div>First</div>
    )
  }
})