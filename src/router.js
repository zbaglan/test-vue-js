import {createRouter, createWebHashHistory} from "vue-router";

const routes = [
    {
        path: '/stemming',
        component: () => import('@/views/Stemming')
    },
    {
        path: '/analyse',
        component: () => import('@/views/Analyse')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router