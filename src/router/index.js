import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/Home.vue')
    },
    {
        path: '/Photos',
        name: 'photos',
        component: () => import('../views/Photos.vue')
    },
    {
        path: '/Events',
        name: 'events',
        component: () => import('../views/Events.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router