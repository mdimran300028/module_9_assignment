import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: '/', name: 'home',
        component:()=>import('../views/Home.vue')
    },
    {
        path: '/blogs/:id', name: 'blogs',
        component:()=>import('../views/Blogs.vue')
    },
    {
        path: '/blog/:id', name: 'blog',
        component:()=>import('../views/Blog.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
