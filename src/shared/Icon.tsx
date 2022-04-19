import { defineComponent, defineProps, PropType } from 'vue';
import s from './Icon.module.scss';

export type IconName = 'add' | 'chart' | 'clock' | 'cloud' | 'mangosteen' | 'pig'

export const Icon = defineComponent({
  props: {
    name: {
      type: String as PropType<IconName>,
      required: true,
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

