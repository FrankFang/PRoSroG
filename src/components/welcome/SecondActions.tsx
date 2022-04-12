import s from './welcome.module.scss';
import { RouterLink } from 'vue-router';
import { FunctionalComponent } from 'vue';
export const SecondActions: FunctionalComponent = () => {
  return <div class={s.actions}>
    <RouterLink class={s.fake} to="/start" >跳过</RouterLink>
    <RouterLink to="/welcome/3" >下一页</RouterLink>
    <RouterLink to="/start" >跳过</RouterLink>
  </div>
}

SecondActions.displayName = 'FirstActions'
