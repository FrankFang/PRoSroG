import { defineComponent, PropType, ref } from 'vue';
import { MainLayout } from '../../layouts/MainLayout';
import { Icon } from '../../shared/Icon';
import { Tabs, Tab } from '../../shared/Tabs';
import { InputPad } from './InputPad';
import s from './ItemCreate.module.scss';
export const ItemCreate = defineComponent({
  props: {
    name: {
      type: String as PropType<string>
    }
  },
  setup: (props, context) => {
    const refKind = ref('支出')
    return () => (
      <MainLayout>{{
        title: () => '记一笔',
        icon: () => <Icon name="left" class={s.navIcon} />,
        default: () => <>
          <Tabs v-model:selected={refKind.value}>
            <Tab name="支出">
              icon 列表
            </Tab>
            <Tab name="收入">
              icon 列表2
            </Tab>
          </Tabs>
          <div class={s.inputPad_wrapper}>
            <InputPad />
          </div>
        </>
      }}</MainLayout>
    )
  }
})