import Vue from 'vue';
import App from './App.vue';
import router from './router';
import ElementUI from 'element-ui';
import store from './store/store';
import './registerServiceWorker';
import live2d from 'live2d-vue';

// 引入全局样式
import './assets/css/app.css';
import './assets/css/theme.css';
import './assets/css/animation.css';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.use(live2d);
Vue.config.productionTip = true;

new Vue({
    el: '#app',
    store,
    router,
    render: (h) => h(App),
});
