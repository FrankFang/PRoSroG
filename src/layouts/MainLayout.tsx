import { defineComponent, PropType } from 'vue';
import { Navbar } from '../shared/Navbar';
import s from './MainLayout.module.scss';
export const MainLayout = defineComponent({
  setup: (props, context) => {
    return () => (
      <div class={s.wrapper}>
        <Navbar class={s.navbar}>{
          {
            default: () => context.slots.title?.(),
            icon: () => context.slots.icon?.(),
          }
        }</Navbar>
        {context.slots.default?.()}
      </div>
    )
  }
})