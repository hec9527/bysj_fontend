import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// Vue的路由表
const routes = [{
  path: "/",
  name: "root",
  redirect: "/home"
}, {
  path: '/home',
  name: 'home',
  component: () => import("../views/home.vue")
},
{
  path: '/news',
  name: 'news',
  component: () => import('../views/news.vue')
},
{
  path: "/hot",
  name: "hot",
  component: () => import("../views/hot.vue")
},
{
  path: "/4k",
  name: "4k",
  component: () => import("../views/4k.vue")
},
{
  path: "/category",
  name: "category",
  component: () => import("../views/category.vue")
},
{
  path: "/bing",
  name: "bing",
  component: () => import("../views/bing.vue")
},
{
  path: "/daily",
  name: "daily",
  component: () => import("../views/daily.vue")
},
{
  path: "/individual",
  name: "individual",
  component: () => import("../views/individual.vue")
}
]


// 装载路由表
const router = new VueRouter({
  linkActiveClass: "nav-this",
  routes: routes
});

export default router;
