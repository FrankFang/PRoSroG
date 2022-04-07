import { RouteRecordRaw } from "vue-router";
import { First } from "../components/welcome/First";
import { Forth } from "../components/welcome/Forth";
import { Second } from "../components/welcome/Second";
import { Third } from "../components/welcome/Third";
import { Welcome } from "../views/Welcome";

export const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/welcome' },
  {
    path: '/welcome',
    component: Welcome,
    children: [
      { path: '', redirect: '/welcome/1', },
      { path: '1', component: First, },
      { path: '2', component: Second, },
      { path: '3', component: Third, },
      { path: '4', component: Forth, },
    ]
  }
]