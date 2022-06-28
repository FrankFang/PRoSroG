import s from './welcome.module.scss';
import { RouterLink } from 'vue-router';
import { SkipFeatures } from '../../shared/SkipFeatures';
const onClick = () => {
  localStorage.setItem('skipFeatures', 'yes')
}
export const ForthActions = () => (
  <div class={s.actions}>
    <SkipFeatures class={s.fake} />
    <span onClick={onClick}>
      <RouterLink to="/start">完成</RouterLink>
    </span>
    <SkipFeatures class={s.fake} />
  </div>
)

ForthActions.displayName = 'ForthActions'