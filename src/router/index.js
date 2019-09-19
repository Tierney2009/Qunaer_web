import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/Home/Homelist.vue'
import City from '../components/city/City.vue'
import Detail from '../components/detail/Detail'
Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',name:'Home',component:home},
    {path:'/city',name:'city',component:City},
    {path:'/detail/:id',name:'detail',component:Detail}
  ],

  scrollBehavior (to, from, savedPosition) {
    return {x: 0, y: 0}
  }
  })
