import { defineComponent } from 'vue';
import s from './First.module.scss';
import cloud from '../../assets/icons/cloud.svg';
import { RouterLink } from 'vue-router';
export const Forth = defineComponent({
  setup: (props, context) => {
    return () => (
      <div class={s.wrapper}>
        <div class={s.card}>
          <img class={s.icon} src={cloud} />
          <h2>每日提醒<br/>不遗漏每一笔账单</h2>
        </div>
        <div class={s.actions}>
          <RouterLink class={s.fake} to="/start" >跳过</RouterLink>
          <RouterLink to="/start" >完成</RouterLink>
          <RouterLink class={s.fake} to="/start" >跳过</RouterLink>
        </div>
      </div>
    )
  }
})