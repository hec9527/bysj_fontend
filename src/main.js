import Vue from 'vue';
import App from './App.vue';
import router from './router';
import ElementUI from 'element-ui';
import { store } from './store/index';
import './registerServiceWorker';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.config.productionTip = false;

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
