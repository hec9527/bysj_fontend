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
  components: () => import("../views/home.vue")
},
{
  path: '/news',
  name: 'news',
  components: () => import('../views/news.vue')
},
{
  path: "/hot",
  name: "hot",
  components: () => import("../views/hot.vue")
},
{
  path: "/4k",
  name: "4k",
  components: () => import("../views/4k.vue")
},
{
  path: "/category",
  name: "category",
  components: () => import("../views/category.vue")
},
{
  path: "/bing",
  name: "bing",
  components: () => import("../views/bing.vue")
},
{
  path: "/daily",
  name: "daily",
  components: () => import("../views/daily.vue")
},
{
  path: "/individual",
  name: "individual",
  components: () => import("../views/individual.vue")
}
]


// 装载路由表
const router = new VueRouter({
  linkActiveClass: "nav-this",
  routes: routes
});

export default router;
