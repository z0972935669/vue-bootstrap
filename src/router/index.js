import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/aspect',
        name: 'Aspect',
        component: () => import('../views/Aspect.vue')
    },
    {
        path: '/avatar',
        name: 'Avatar',
        component: () => import('../views/Avatar.vue')
    },
    {
        path: '/breadcrumb',
        name: 'Breadcrumb',
        component: () => import('../views/Breadcrumb.vue')
    },
    {
        path: '/carousel',
        name: 'Carousel',
        component: () => import('../views/Carousel.vue')
    },
    {
        path: '/collapse',
        name: 'Collapse',
        component: () => import('../views/Collapse.vue')
    },
    {
        path: '/dropdowns',
        name: 'Dropdowns',
        component: () => import('../views/Dropdowns.vue')
    },
    {
        path: '/embeds',
        name: 'Embeds',
        component: () => import('../views/Embeds.vue')
    },
    {
        path: '/form',
        name: 'Form',
        component: () => import('../views/Form.vue')
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
