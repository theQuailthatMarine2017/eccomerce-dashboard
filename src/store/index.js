import Vuex from "vuex";
import Vue from "vue";
import shop from "./modules/shop";


// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
  modules: {
    shop
  }
});