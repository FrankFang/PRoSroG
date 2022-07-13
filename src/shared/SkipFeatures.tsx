import { defineComponent, PropType } from 'vue';
import { RouteLocationRaw, RouterLink } from 'vue-router';
import s from './SkipFeatures.module.scss';
export const SkipFeatures = defineComponent({
  setup: (props, context) => {
    const onClick = () => {
      localStorage.setItem('skipFeatures', 'yes')
    }
    return () => (
      <span onClick={onClick}>
        <RouterLink to="/items">跳过</RouterLink>
      </span>
    )
  }
})
