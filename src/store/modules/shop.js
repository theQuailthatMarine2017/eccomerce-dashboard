import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default {
  state: {
    menu:'',
    orders:null,
    success:false,
    item_added:false,
    updated:false,
    complete:false,
    deleted:false,
    order_delete:false
  },
  getters: {
    menu: state => state.menu,
    order_delete: state => state.order_delete,
    orders: state => state.orders,
    updated: state => state.updated,
    success: state => state.success,
    item_added: state => state.item_added,
    deleted: state => state.deleted,
    complete: state => state.complete
  },
  mutations: {
    getMenu(state,data){

      state.menu = data;

    },
    Order_Complete(state,data){

        state.complete = data;
    },
    order_delete(state,data){

        state.order_delete = data
    },
    product_updated(state,data){

        state.updated = data;
    },
    product_deleted(state,data){

        state.deleted = data;
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
    logout(state){

        state.orders = null;
        state.success = false;
        state.menu = null;
    }
  },
  actions: {
    get_menu({commit}){

        commit("getMenu", null)
      axios.get('http://localhost:5001/chellez-kitchen/us-central1/getMenu').then( response => {

          if(response != null){

            console.log(response.data.menu_final)
            commit("getMenu", response.data.menu_final)

          }

      }).catch( err => {


        if(err.message === 'Request failed with status code 501'){

          var error_email_mobile = 'Server Error. Please Try Again!'
          commit("AddError", error_email_mobile)
        }

      })
    },
    update_product({commit}, data){

        commit("product_updated", false)

        console.log('updating' +  ' ' + data._id )

        axios.post('http://localhost:5001/chellez-kitchen/us-central1/updateMenuItem', data).then( response => {

          console.log('response recieved')
          if(response.data.title === 'Product Updated!'){
              
            commit("product_updated", true)

          }

        }).catch( err => {


            if(err.message === 'Request failed with status code 501'){

            var error_email_mobile = 'Server Error. Please Try Again!'
            commit("AddError", error_email_mobile)
            }

        });


    },
    deleteproduct({commit}, data){

        commit("product_deleted", false)
        console.log('updating' +  ' ' + data)

        let data_id = {
            _id: data
        }

        axios.post('http://localhost:5001/chellez-kitchen/us-central1/deleteMenuItem', data_id).then( response => {

          console.log('response recieved')
          if(response.data.title === 'Item Deleted!'){
              
            commit("product_deleted", true)

          }

        }).catch( err => {


            if(err.message === 'Request failed with status code 501'){

            var error_email_mobile = 'Server Error. Please Try Again!'
            commit("AddError", error_email_mobile)
            }

        });

    },
    mark_complete({commit}, data){

        commit("Order_Complete", false)

        axios.post('http://localhost:5001/chellez-kitchen/us-central1/orderComplete', data).then( response => {

          console.log('response recieved')
          if(response.data.title === 'Order Completed!'){

            
                commit("Order_Complete", true)

          }

        }).catch( err => {


            if(err.message === 'Request failed with status code 501'){

            var error_email_mobile = 'Server Error. Please Try Again!'
            commit("AddError", error_email_mobile)
            }

        });

    },
    delete_order({commit}, data){

        commit("order_delete", false)

        axios.post('http://localhost:5001/chellez-kitchen/us-central1/deleteOrder', data).then( response => {

          console.log('response recieved')
          if(response.data.title === 'Order Deleted!'){

            
                commit("order_delete", true)

          }

        }).catch( err => {


            if(err.message === 'Request failed with status code 501'){

            var error_email_mobile = 'Server Error. Please Try Again!'
            commit("AddError", error_email_mobile)
            }

        });

    },
    add_Menu({commit}, data){

        
        commit("Add_Menu", false)
        console.log('creating')

        axios.post('http://localhost:5001/chellez-kitchen/us-central1/addMenuItem', data).then( response => {

          console.log('response recieved')
          if(response.data.title === 'Item Added To Menu!'){

            
                commit("Add_Menu", true)

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
    get_orders({commit}){

        commit("getOrders", null)
        axios.get('http://localhost:5001/chellez-kitchen/us-central1/getOrder').then( response => {

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
};