// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


// 关闭生产环境下面的提示
Vue.config.productionTip = false

// 引入图标SVG
import Icon from 'vue-svg-icon/Icon.vue';
Vue.component('icon', Icon);

// 引入vux插件
import {AlertPlugin} from 'vux'
Vue.use(AlertPlugin);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
