import Vue from 'vue'
import VueRouter from 'vue-router'
import VTooltip from 'v-tooltip'
//import Home from '../views/Home.vue'

Vue.use(VueRouter)
Vue.use(VTooltip)

const routes = [
  /*{
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( '../views/About.vue')
  },
  {
    path:'/Timeline',
    name:'Timeline',
    component:() => import( '../views/Timeline.vue')
  },*/
  {
    path:'/',
    name:'Hud',
    component:()=>import('../views/Hud.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
