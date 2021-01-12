import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menu:null,
    err:null,
    orders:null,
    success:false,
    item_menu:false,
  },
  getters: {
    err: state => state.err,
    menu: state => state.menu,
    orders: state => state.orders,
    success: state => state.success,
    item_added: state => state.item_menu
  },
  mutations: {
    getMenu(state,data){

      state.menu = data;

    },
    Add_Menu(state,data){

        state.item_added = data;
    },
    login_success(state,data){

        state.success = data;

    },
    getOrders(state,data){

      state.orders = data;

    },
    AddError(state,data){

      state.err = data;

    },
    clearError(state){

      state.err = null;

    },
    logout(state){

        state.err = null;
        state.orders = null;
        state.success = false;
        state.menu = null;
    }
  },
  actions: {
    get_menu({commit}){

      axios.get('https://fed12e045b55.ngrok.io/api/chellez/menu').then( response => {

          if(response != null){

            commit("getMenu", response.data.menu)

          }

      }).catch( err => {


        if(err.message === 'Request failed with status code 501'){

          var error_email_mobile = 'Server Error. Please Try Again!'
          commit("AddError", error_email_mobile)
        }

      })
    },
    add_Menu({commit}, data){


        axios.post('http://localhost:5001/chellez-kitchen/us-central1/addMenuItem', data).then( response => {

          console.log(response.data)
          if(response.data.title === 'Item Added To Menu!'){

            
            commit("login_success", true)

          }

      }).catch( err => {


        if(err.message === 'Request failed with status code 501'){

          var error_email_mobile = 'Server Error. Please Try Again!'
          commit("AddError", error_email_mobile)
        }

      });

    },
    completeOrder({commit}, data){

        axios.post('https://fed12e045b55.ngrok.io/api/chellez/menu').then( response => {

            if(response != null){

                commit("getOrders", response.data.orders)
    
              }

        }).catch( err => {


        if(err.message === 'Request failed with status code 501'){

          var error_email_mobile = 'Server Error. Please Try Again!'
          commit("AddError", error_email_mobile)
        }

      })


    },
    get_orders({commit}, data){

        axios.get('https://fed12e045b55.ngrok.io/api/chellez/menu').then( response => {

            if(response != null){

                commit("getOrders", response.data.menu)
    
              }

        }).catch( err => {


        if(err.message === 'Request failed with status code 501'){

          var error_email_mobile = 'Server Error. Please Try Again!'
          commit("AddError", error_email_mobile)
        }

      })
    },
    login_admin({commit}, data){

        
        axios.post('http://localhost:5001/chellez-kitchen/us-central1/loginAdmin',data).then( response => {

            console.log('kjvjghgchchf' + response.data)
            if(response.data.title === 'admin found'){

                localStorage.setItem('admin', response.data.username)
                commit("login_success", true)
    
              }
        }).catch( err => {


            if(err.message === 'Request failed with status code 501'){
    
              var error_email_mobile = 'Server Error. Please Try Again!'
              commit("AddError", error_email_mobile)
            }
    
          })
    },
    logg_off({commit}){

        console.log('lslslsls')
        localStorage.clear()
        commit('logout')


    }
  }
})