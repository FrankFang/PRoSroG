import { defineComponent, PropType } from 'vue';
import s from './Navbar.module.scss';
export const Navbar = defineComponent({
  props: {
    name: {
      type: String as PropType<string>
    }
  },
  setup: (props, context) => {
    const {slots} = context
    return () => (
      <div class={s.navbar}>
        <span class={s.icon_wrapper}>
          {slots.icon?.()}
        </span>
        <span class={s.title_wrapper}>
          {slots.default?.()}
        </span>
      </div>
    )
  }
})