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
        path: '/',
        name: 'test',
        component: () => import('@/component/card-img.vue')
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home.vue')
    },
    {
        path: '/search',
        name: 'search',
        component: () => import('@/views/search.vue')
    },
    {
        path: '/category',
        name: 'category',
        component: () => import('@/views/category.vue')
    },
    {
        path: '/bing',
        name: 'bing',
        component: () => import('@/views/bing.vue')
    },
    {
        path: '/daily',
        name: 'daily',
        component: () => import('@/views/daily.vue')
    },
    {
        path: '/indi',
        name: 'individual',
        component: () => import('@/views/individaul.vue')
    }
];

// 装载路由表
const router = new VueRouter({
    linkActiveClass: 'nav-this',
    routes: routes
});

export default router;
