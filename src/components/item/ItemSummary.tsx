import { defineComponent, PropType } from 'vue';
import { FloatButton } from '../../shared/FloatButton';
import s from './ItemSummary.module.scss';
export const ItemSummary = defineComponent({
  props: {
    startDate: {
      type: String as PropType<string>,
      required: true
    },
    endDate: {
      type: String as PropType<string>,
      required: true
    }
  },
  setup: (props, context) => {
    return () => (
      <div class={s.wrapper}>
        <ul class={s.total}>
          <li><span>收入</span><span>128</span></li>
          <li><span>支出</span><span>99</span></li>
          <li><span>净收入</span><span>39</span></li>
        </ul>
        <ol class={s.list}>
          <li>
            <div class={s.sign}>
              <span>X</span>
            </div>
            <div class={s.text}>
              <div class={s.tagAndAmount}>
                <span class={s.tag}>旅行</span>
                <span class={s.amount}>￥1234</span>
              </div>
              <div class={s.time}>
                2000-01-01 12:39
              </div>
            </div>
          </li>
          <li>
            <div class={s.sign}>
              <span>X</span>
            </div>
            <div class={s.text}>
              <div class={s.tagAndAmount}>
                <span class={s.tag}>旅行</span>
                <span class={s.amount}>￥1234</span>
              </div>
              <div class={s.time}>
                2000-01-01 12:39
              </div>
            </div>
          </li>
          <li>
            <div class={s.sign}>
              <span>X</span>
            </div>
            <div class={s.text}>
              <div class={s.tagAndAmount}>
                <span class={s.tag}>旅行</span>
                <span class={s.amount}>￥1234</span>
              </div>
              <div class={s.time}>
                2000-01-01 12:39
              </div>
            </div>
          </li>
          <li>
            <div class={s.sign}>
              <span>X</span>
            </div>
            <div class={s.text}>
              <div class={s.tagAndAmount}>
                <span class={s.tag}>旅行</span>
                <span class={s.amount}>￥1234</span>
              </div>
              <div class={s.time}>
                2000-01-01 12:39
              </div>
            </div>
          </li>
          <li>
            <div class={s.sign}>
              <span>X</span>
            </div>
            <div class={s.text}>
              <div class={s.tagAndAmount}>
                <span class={s.tag}>旅行</span>
                <span class={s.amount}>￥1234</span>
              </div>
              <div class={s.time}>
                2000-01-01 12:39
              </div>
            </div>
          </li>
          <li>
            <div class={s.sign}>
              <span>X</span>
            </div>
            <div class={s.text}>
              <div class={s.tagAndAmount}>
                <span class={s.tag}>旅行</span>
                <span class={s.amount}>￥1234</span>
              </div>
              <div class={s.time}>
                2000-01-01 12:39
              </div>
            </div>
          </li>
        </ol>
        <div class={s.more}>向下滑动加载更多</div>
        <FloatButton iconName='add' />
      </div>
    )
  }
})