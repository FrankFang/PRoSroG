import { computed, defineComponent, PropType, reactive } from 'vue';
import { Money } from '../../shared/Money';
import s from './Bars.module.scss';
export const Bars = defineComponent({
  props: {
    data: {
      type: Array as PropType<{tag:Tag, amount:number, percent: number}[]>
    }
  },
  setup: (props, context) => {
    return () => (
      <div class={s.wrapper}>
        {(props.data && props.data.length > 0) ?
          props.data.map(({ tag, amount, percent }) => {
            return (
              <div class={s.topItem}>
                <div class={s.sign}>
                  {tag.sign}
                </div>
                <div class={s.bar_wrapper}>
                  <div class={s.bar_text}>
                    <span> {tag.name} - {percent}% </span>
                    <span> ￥<Money value={amount}/> </span>
                  </div>
                  <div class={s.bar}>
                    <div class={s.bar_inner} style={{width: `${percent}%`}}></div>
                  </div>
                </div>
              </div>
            )
          }): <div>没有数据</div>
        }
        </div>
    )
  }
})
