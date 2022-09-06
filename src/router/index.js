import {
    createWebHashHistory,
    createRouter
} from 'vue-router'

import Index from '~/pages/index.vue' 
import Login from '~/pages/login.vue'
import Notfound from '~/pages/404.vue'
const routes=[
    {
    path:'/',            //指定path根路径是/
    component:Index     
},{
    path:'/login',
    component:Login
},{
    path:'/:pathMatch(.*)*',
    component:Notfound
}
]

const router=createRouter({
    history: createWebHashHistory(),
    routes
})
export default router