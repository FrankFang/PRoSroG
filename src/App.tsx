import { defineComponent, Transition, VNode } from "vue";
import { RouteLocationNormalizedLoaded, RouterView } from "vue-router";
import "./App.scss"

export const App = defineComponent({
  setup() {
    return () => (
      <div class="page">
        <RouterView />
      </div>
    )
  }
})