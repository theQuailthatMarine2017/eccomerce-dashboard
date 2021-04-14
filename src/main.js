/* eslint-disable */
import Vue from 'vue';
import ShardsVue from 'shards-vue';
import moment from 'moment';
import FileSelector from 'vue-file-selector';
import VModal from 'vue-js-modal/dist/index.nocss.js';
import 'vue-js-modal/dist/styles.css';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import VueToast from 'vue-toast-notification';
// Import one of available themes
import 'vue-toast-notification/dist/theme-sugar.css';
import Notifications from 'vue-notification';
import VueNativeNotification from 'vue-native-notification'
import UUID from "vue-uuid";
import VueTelInput from 'vue-tel-input';
import 'vue-tel-input/dist/vue-tel-input.css';
import PrettyCheckbox from 'pretty-checkbox-vue';
import vSelect from 'vue-select';
import  vueble  from  'vueble'
import 'vue-select/dist/vue-select.css';import "@fortawesome/fontawesome-free/css/all.min.css";
import 'vue-jd-table/dist/jd-table.min.css';




Vue.use(PrettyCheckbox);
Vue.use(vueble);
Vue.use(VueTelInput);
Vue.component('v-select', vSelect)

// Styles
import 'bootstrap/dist/css/bootstrap.css';
import '@/scss/shards-dashboards.scss';
import '@/assets/scss/date-range.scss';

// Core
import App from './App.vue';
import router from './router';
import store from "./store";

// Layouts
import Default from '@/layouts/Default.vue';

ShardsVue.install(Vue);

// Init plugin
Vue.use(FileSelector);
Vue.use(UUID);
Vue.use(Loading);
Vue.use(VueNativeNotification, {
  // Automatic permission request before
  // showing notification (default: true)
  requestOnNotify: true
});
Vue.use(Notifications)
Vue.use(VueToast);
Vue.component('default-layout', Default);
Vue.use(VModal,{ dialog: true });


Vue.config.productionTip = false;
Vue.prototype.$eventHub = new Vue();
Vue.prototype.moment = moment;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
