import { defineComponent } from 'vue';
import s from './First.module.scss';
export const WelcomeLayout = defineComponent({
  setup: (props, context) => {
    const {slots} = context
    return () => (
      <div class={s.wrapper}>
        <div class={s.card}>
          {slots.icon?.()} 
          {slots.title?.()}
        </div>
        <div class={s.actions}>
          {slots.buttons?.()}
        </div>
      </div>
    )
  }
})