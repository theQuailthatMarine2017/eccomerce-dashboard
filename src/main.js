/* eslint-disable */
import Vue from 'vue';
import ShardsVue from 'shards-vue';
import moment from 'moment';
import VModal from 'vue-js-modal/dist/index.nocss.js'
import 'vue-js-modal/dist/styles.css'

// Styles
import 'bootstrap/dist/css/bootstrap.css';
import '@/scss/shards-dashboards.scss';
import '@/assets/scss/date-range.scss';

// Core
import App from './App.vue';
import router from './router';

// Layouts
import Default from '@/layouts/Default.vue';

ShardsVue.install(Vue);

Vue.component('default-layout', Default);
Vue.use(VModal,{ dialog: true });


Vue.config.productionTip = false;
Vue.prototype.$eventHub = new Vue();
Vue.prototype.moment = moment;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
