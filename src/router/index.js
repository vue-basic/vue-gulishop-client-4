import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Search from '@/pages/Search'
import Register from '@/pages/Register'
export default new VueRouter({
    routes:[
        {
            path:'/home',
            component:Home
        },
        {
            path:'/search',
            component:Search
        },
        {
            path:'/login',
            component:Login,
            meta:{
                isHide:true
            }
        },
        {
            path:'/register',
            component:Register,
            meta:{
                isHide:true
            }
        },
        {
            path:'/',
            redirect:'/home'

        }
    ]
})