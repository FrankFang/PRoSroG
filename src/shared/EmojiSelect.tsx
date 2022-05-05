import { defineComponent, PropType, ref } from 'vue';
import { emojiList } from './emojiList';
import s from './EmojiSelect.module.scss';
export const EmojiSelect = defineComponent({
  props: {
    name: {
      type: String as PropType<string>
    }
  },
  setup: (props, context) => {
    console.log(emojiList)
    const refSelected = ref(1)
    const table: [string, string[]][] = [
      ['表情', ['face-smiling', 'face-affection', 'face-tongue', 'face-hand',
        'face-neutral-skeptical', 'face-sleepy', 'face-unwell', 'face-hat',
        'face-glasses', 'face-concerned', 'face-negative', 'face-costume'
      ]],
      ['手势', ['hand-fingers-open', 'hand-fingers-partial', 'hand-single-finger',
        'hand-fingers-closed', 'hands', 'hand-prop', 'body-parts']],
      ['人物', ['person', 'person-gesture', 'person-role', 'person-fantasy',
        'person-activity', 'person-sport', 'person-resting']],
      ['衣服', ['clothing']],
      ['动物', ['cat-face', 'monkey-face', 'animal-mammal', 'animal-bird',
        'animal-amphibian', 'animal-reptile', 'animal-marine', 'animal-bug']],
      ['植物', ['plant-flower', 'plant-other']],
      ['自然', ['sky & weather', 'science']],
      ['食物', [
        'food-fruit', 'food-vegetable', 'food-prepared', 'food-asian',
        'food-marine', 'food-sweet'
      ]],
      ['运动', ['sport', 'game']],
    ]
    const selectedItem = table[refSelected.value][1]
    const emojis = selectedItem.map(category =>
      emojiList.find(item => item[0] === category)?.[1]
        .map(item => <li>{item}</li>)
    )
    return () => (
      <div class={s.emojiList}>
        <nav>
          {table.map(item => <span>{item[0]}</span>)}
        </nav>
        <ol>
          {emojis}
        </ol>
      </div>
    )
  }
})