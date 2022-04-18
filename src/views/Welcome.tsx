import { defineComponent, ref, Transition, VNode, watchEffect } from 'vue';
import { RouteLocationNormalizedLoaded, RouterView, useRoute, useRouter } from 'vue-router';
import { useSwipe } from '../hooks/useSwipe';
import { throttle } from '../shared/throttle';
import s from './Welcome.module.scss'
export const Welcome = defineComponent({
  setup: (props, context) => {
    const main = ref<HTMLElement>()
    const { direction, swiping } = useSwipe(main, { beforeStart: e => e.preventDefault() })
    const route = useRoute()
    const router = useRouter()
    const push = throttle(() => {
      if (route.name === 'Welcome1') {
        router.push('/welcome/2')
      } else if (route.name === 'Welcome2') {
        router.push('/welcome/3')
      } else if (route.name === 'Welcome3') {
        router.push('/welcome/4')
      } else if (route.name === 'Welcome4') {
        router.push('/start')
      }
    }, 500)
    watchEffect(() => {
      if (swiping.value && direction.value === 'left') {
        push()
      }
    })
    return () => <div class={s.wrapper}>
      <header>
        <svg>
          <use xlinkHref='#mangosteen'></use>
        </svg>
        <h1>山竹记账</h1>
      </header>
      <main class={s.main} ref={main}>
        <RouterView name="main">
          {({ Component: X, route: R }: { Component: VNode, route: RouteLocationNormalizedLoaded }) =>
            <Transition enterFromClass={s.slide_fade_enter_from} enterActiveClass={s.slide_fade_enter_active}
              leaveToClass={s.slide_fade_leave_to} leaveActiveClass={s.slide_fade_leave_active}>
              {X}
            </Transition>
          }
        </RouterView>
      </main>
      <footer>
        <RouterView name="footer" />
      </footer>
    </div>
  }
})