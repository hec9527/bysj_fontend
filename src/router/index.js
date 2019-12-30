import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// Vue的路由表
const routes = [
    {
        path: '/',
        name: 'root',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home/index.vue')
    },
    {
        path: '/category',
        name: 'category',
        component: () => import('@/views/category/index.vue')
    },
    {
        path: '/bing',
        name: 'bing',
        component: () => import('@/views/bing/index.vue')
    },
    {
        path: '/daily',
        name: 'daily',
        component: () => import('@/views/daily/index.vue')
    },
    {
        path: '/indi',
        name: 'individual',
        component: () => import('@/views/individaul/index.vue')
    }
];

// 装载路由表
const router = new VueRouter({
    linkActiveClass: 'nav-this',
    routes: routes
});

export default router;
