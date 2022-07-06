import { defineComponent, PropType, reactive, toRaw } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { Button } from '../../shared/Button';
import { EmojiSelect } from '../../shared/EmojiSelect';
import { Form, FormItem } from '../../shared/Form';
import { http } from '../../shared/Http';
import { onFormError } from '../../shared/onFormError';
import { hasError, Rules, validate } from '../../shared/validate';
import s from './Tag.module.scss';
export const TagForm = defineComponent({
  props: {
    name: {
      type: String as PropType<string>
    }
  },
  setup: (props, context) => {
    const route = useRoute();
    const formData = reactive({
      name: '',
      sign: '',
      kind: route.query.kind!.toString(),
    })
    const errors = reactive<{ [k in keyof typeof formData]?: string[] }>({})
    const router = useRouter()
    const onSubmit = async (e: Event) => {
      e.preventDefault()
      const rules: Rules<typeof formData> = [
        { key: 'name', type: 'required', message: '必填' },
        { key: 'name', type: 'pattern', regex: /^.{1,4}$/, message: '只能填 1 到 4 个字符' },
        { key: 'sign', type: 'required', message: '必填' },
      ]
      Object.assign(errors, {
        name: [],
        sign: []
      })
      Object.assign(errors, validate(formData, rules))
      if(!hasError(errors)){
        const response = await http.post('/tags', formData, {
          params: {_mock: 'tagCreate'},
        }).catch((error)=>
          onFormError(error, (data)=> Object.assign(errors, data.errors))
        )
        router.back()
      }
    }
    return () => (
      <Form onSubmit={onSubmit}>
        <FormItem label='标签名（最多 4 个字符）'
          type="text"
          v-model={formData.name}
          error={errors['name']?.[0]} />
        <FormItem label={'符号 ' + formData.sign}
          type="emojiSelect" v-model={formData.sign}
          error={errors['sign']?.[0]} />
        <FormItem>
          <p class={s.tips}>记账时长按标签即可进行编辑</p>
        </FormItem>
        <FormItem>
          <Button type="submit" class={[s.button]}>确定</Button>
        </FormItem>
      </Form>
    )
  }
})
