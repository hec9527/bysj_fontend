import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import './registerServiceWorker'
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  router,
  render: h => h(App)
})

// 入口文件
// 全局配置文件
// 在此处引用的文件可以在全局使用