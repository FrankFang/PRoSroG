import { defineComponent, defineProps, PropType } from 'vue';
import s from './Icon.module.scss';
export const Icon = defineComponent({
  props: {
    name: {
      type: String as PropType<'add' | 'chart' | 'clock' | 'cloud' | 'mangosteen' | 'pig'>
    }
  },
  setup: (props, context) => {
    return () => (
      <svg class={s.icon}>
        <use xlinkHref={'#' + props.name}></use>
      </svg>
    )
  }
})

