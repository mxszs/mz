import Vue from "vue"

import Router from "vue-router"

import AppMain from '@/components/AppMain'
import AppNews from '@/components/AppNews'
import Inside from '@/components/news/inside'
import Outside from '@/components/news/outside'
import Detil from '@/components/news/detil'

Vue.use(Router)
const routes = [
       { path: '', redirect: '/main' },
        {path:'/main',component:AppMain,name:"main"},
        {path:'/news',component:AppNews,
             children: [
            { path: '', redirect: 'inside',name:"news"},      
        {
          path: 'inside',
          component: Inside,
          name:"inside"
        },
        {
          path: 'outside',
          component: Outside,
          name:"outside"
        },
        {
          path: 'detil/:id',
          component: Detil,
          name:"detil",
          props:true
        },
      ]
    },
   // {path:'**',redirect:'/main'}
    

]
const router = new Router({
    routes,
    mode:'history'
})
export default router