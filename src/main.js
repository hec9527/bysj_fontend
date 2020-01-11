import Vue from 'vue';
import App from './App.vue';
import router from './router';
import ElementUI from 'element-ui';
import store from './store/index';
import './registerServiceWorker';

// 引入全局样式
import './assets/css/app.css';
import './assets/css/theme.css';
import './assets/css/animation.css';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.config.productionTip = true;

new Vue({
    el: '#app',
    store,
    router: router,
    mounted: function() {
        // console.log('Vm mounted');
        // console.log('%c %o', 'color:red', store);
    },
    render: h => h(App)
});
