import Vue from "vue"
import VueRouter from "vue-router"
import { VueConstructor } from "vue/types/umd"

// ページコンポーネント
import Top from "./pages/Top.vue"

Vue.use(VueRouter)

interface routerInterface {
  path: string,
  component: VueConstructor<Vue>
}

const routes: routerInterface[] = [
  {
      path: "/",
      component: Top
  },
  {
    path: "/register",
    component: Top
  },
  {
    path: "/login",
    component: Top
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router