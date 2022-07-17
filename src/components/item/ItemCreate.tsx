import { AxiosError } from 'axios'
import { Dialog } from 'vant'
import { defineComponent, onMounted, PropType, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { MainLayout } from '../../layouts/MainLayout'
import { BackIcon } from '../../shared/BackIcon'
import { Button } from '../../shared/Button'
import { http } from '../../shared/Http'
import { Icon } from '../../shared/Icon'
import { Tabs, Tab } from '../../shared/Tabs'
import { useTags } from '../../shared/useTags'
import { hasError, validate } from '../../shared/validate'
import { InputPad } from './InputPad'
import s from './ItemCreate.module.scss'
import { Tags } from './Tags'
export const ItemCreate = defineComponent({
  props: {
    name: {
      type: String as PropType<string>
    }
  },
  setup: (props, context) => {
    const formData = reactive<Partial<Item>>({
      kind: 'expenses',
      tag_ids: [],
      amount: 0,
      happen_at: new Date().toISOString()
    })
    const errors = reactive<FormErrors<typeof formData>>({ kind: [], tag_ids: [], amount: [], happen_at: [] })
    const router = useRouter()
    const onError = (error: AxiosError<ResourceError>) => {
      if (error.response?.status === 422) {
        Dialog.alert({
          title: '出错',
          message: Object.values(error.response.data.errors).join('\n')
        })
      }
      throw error
    }
    const onSubmit = async () => {
      Object.assign(errors, { kind: [], tag_ids: [], amount: [], happen_at: [] })
      Object.assign(errors, validate(formData, [
        { key: 'kind', type: 'required', message: '类型必填' },
        { key: 'tag_ids', type: 'required', message: '标签必填' },
        { key: 'amount', type: 'required', message: '金额必填' },
        { key: 'amount', type: 'notEqual', value: 0, message: '金额不能为零' },
        { key: 'happen_at', type: 'required', message: '时间必填' },
      ]))
      if(hasError(errors)){
        Dialog.alert({
          title: '出错',
          message: Object.values(errors).filter(i=>i.length>0).join('\n')
        })
        return
      }
      await http.post<Resource<Item>>('/items', formData, { _mock: 'itemCreate', _autoLoading: true }).catch(onError)
      router.push('/items')
    }
    return () => (
      <MainLayout class={s.layout}>
        {{
          title: () => '记一笔',
          icon: () => <BackIcon />,
          default: () => (
            <>
              <div class={s.wrapper}>
                <Tabs v-model:selected={formData.kind} class={s.tabs}>
                  <Tab value="expenses" name="支出">
                    <Tags kind="expenses" v-model:selected={formData.tag_ids![0]} />
                  </Tab>
                  <Tab value="income" name="收入">
                    <Tags kind="income" v-model:selected={formData.tag_ids![0]} />
                  </Tab>
                </Tabs>
                <div class={s.inputPad_wrapper}>
                  <InputPad
                    v-model:happenAt={formData.happen_at}
                    v-model:amount={formData.amount}
                    onSubmit={onSubmit}
                  />
                </div>
              </div>
            </>
          )
        }}
      </MainLayout>
    )
  }
})
