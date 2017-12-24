
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import AppMain from '../components/main/AppMain.vue'
import AppMovie from '../components/movie/AppMove.vue'
import AppNow from '../components/movie/nowMovie/AppNow.vue'
import AppNonow from '../components/movie/nowMovie/AppNonow.vue'
const routes = [
  
  {path:'',redirect:'/main'},
  {path:'/main',name:'main',component:AppMain},
  {path:'/movie',component:AppMovie,
   
                   children: [
                     {path:'',redirect: 'now',name:'movie'},
                     {path:'now',component:AppNow,name:'now'},
                     {path:'nonow',component:AppNonow,name:'nonow'}

                   ]
  },
  {path:'**',redirect: '/main'}
  
]

const router = new Router({
  routes,
})

export default router