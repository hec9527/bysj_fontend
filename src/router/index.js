import Vue from 'vue';
import store from '../store/store';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// Vue的路由表
const routes = [
    {
        path: '/',
        name: 'root',
        redirect: '/test'
    },
    {
        path: '/',
        name: 'test',
        component: () => import('@/component/userLogin.vue')
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
        path: '/share',
        name: 'share',
        meta: { requireAuth: true },
        component: () => import('@/views/share.vue')
    },
    {
        path: '/manager',
        name: 'manager',
        meta: { requireAuth: true },
        component: () => import('@/views/manager.vue')
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

// 每次跳转之前校验权限
router.beforeEach((to, from, next) => {
    // 需要权限校验
    if (to.meta.requireAuth) {
        // token信息不存在
        if (!store.state.userInfo.basic.userToken) {
            next({
                path: '/home',
                query: { redirect: to.fullPath }
            });
        }
    }
    next();
});

// 装载路由表
const router = new VueRouter({
    linkActiveClass: 'nav-this',
    routes: routes
});

export default router;
