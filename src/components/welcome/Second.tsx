import s from './welcome.module.scss';
import clock from '../../assets/icons/clock.svg';
import { FunctionalComponent } from 'vue';

export const Second: FunctionalComponent = () => {
  return <div class={s.card}>
    <img class={s.icon} src={clock} />
    <h2>每日提醒<br />不遗漏每一笔账单</h2>
  </div>
}

Second.displayName = 'Second'