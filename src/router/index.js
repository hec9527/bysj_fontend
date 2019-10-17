import Vue from 'vue';
import VueRouter from 'vue-router';

// 加载Vue用到的其它框架
Vue.use(VueRouter);

// Vue的路由表
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import("../views/Home.vue")
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]


// 装载路由表
const router = new VueRouter({ routes });

export default router;
