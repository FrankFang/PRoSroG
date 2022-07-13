import { defineComponent, onMounted, PropType, ref, watch } from 'vue';
import s from './PieChart.module.scss';
import * as echarts from 'echarts';
import { getMoney } from '../../shared/Money'
const defaultOption = {
  tooltip: {
    trigger: 'item',
    formatter: (x: {name:string, value:number, percent: number})=>{
      const {name,value,percent} = x
      return `${name}: ￥${getMoney(value)} 占比 ${percent}%`
    }
  },
  grid: [
    { left: 0, top: 0, right: 0, bottom: 0 }
  ],
  series: [
    {
      type: 'pie',
      radius: '70%',
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
}
export const PieChart = defineComponent({
  props: {
    data: {
      type: Array as PropType<{name:string, value: number}[]>
    }
  },
  setup: (props, context) => {
    const refDiv2 = ref<HTMLDivElement>()
    let chart: echarts.ECharts | undefined = undefined
    onMounted(() => {
      if (refDiv2.value === undefined) { return }
      // 基于准备好的dom，初始化echarts实例
      chart = echarts.init(refDiv2.value);
      chart.setOption(defaultOption);
    })
    watch(() => props.data, () => {
      chart?.setOption({
        series: [{
          data: props.data
        }]
      })
    })
    return () => (
      <div ref={refDiv2} class={s.wrapper}></div>
    )
  }
})
