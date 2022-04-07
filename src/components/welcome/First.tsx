import { defineComponent } from 'vue';
import s from './First.module.scss';
import pig from '../../assets/icons/pig.svg';
import { WelcomeLayout } from './WelcomeLayout'
import { RouterLink } from 'vue-router';
export const First = defineComponent({
  setup: (props, context) => {
    const slots = {
      icon: () => <img src={pig} />,
      title: () => <h2>会挣钱<br />还会省钱</h2>,
      buttons: () => <>
        <RouterLink class={s.fake} to="/start" >跳过</RouterLink>
        <RouterLink to="/welcome/2" >下一页</RouterLink>
        <RouterLink to="/start" >跳过</RouterLink>
      </>
    }
    return () => (
      <WelcomeLayout v-slots={slots}></WelcomeLayout>
    )
  }
})