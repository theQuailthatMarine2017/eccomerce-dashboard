import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default {
  state: {
    menu:'',
    orders:null,
    success:false,
    errors:null,
    client_added:false,
    updated:false,
    complete:false,
    deleted:false,
    order_delete:false,
    staff_admin_added:false,
    staff_admin:null
  },
  getters: {
    menu: state => state.menu,
    staff_admin_added: state => state.staff_admin_added,
    order_delete: state => state.order_delete,
    orders: state => state.orders,
    updated: state => state.updated,
    success: state => state.success,
    client_added: state => state.client_added,
    deleted: state => state.deleted,
    complete: state => state.complete,
    errors: state => state.errors,
    staff_admin: state => state.staff_admin
  },
  mutations: {
    getMenu(state,data){

      state.menu = data;

    },
    getAdminStaff(state,data){

      state.staff_admin = data;
    },
    AddError(state,data){

      state.errors = data;
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
    Add_Client(state,data){

        state.client_added = data;
    },
    Add_Staff(state,data){

      state.staff_admin_added = data
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
    get_admin_staff({commit}){

      commit("getAdminStaff", null)
    axios.get('http://localhost:5001/chellez-kitchen/us-central1/getAdminStaff').then( response => {

        if(response != null){

          console.log(response.data.menu_final)
          commit("getAdminStaff", response.data.menu_final)

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
          if(response.data.title === 'Client Updated!'){
            
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
          if(response.data.title === 'Client Deleted!'){
              
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
    add_Client({commit}, data){

        
        commit("Add_Client", false)
        console.log('creating')

        axios.post('http://localhost:5001/chellez-kitchen/us-central1/addMenuItem', data).then( response => {

          console.log('response recieved')
          if(response.data.title === 'New Client Created!'){

            commit("Add_Client", true)
            
          }
          
          

      }).catch( err => {


        if(err.message === 'Request failed with status code 501'){

          var error_email_mobile = 'Server Error. Please Try Again!'
          commit("AddError", error_email_mobile)
        }

      });

    },
    add_Admin_Staff({commit}, data){

        
      commit("Add_Staff", false)
      console.log('creating admin...')

      axios.post('http://localhost:5001/chellez-kitchen/us-central1/createsAdmin', data).then( response => {

        console.log('response recieved')
        if(response.data.title === 'admin created'){

          commit("Add_Staff", true)
          
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

        commit("AddError", null);

        axios.post('http://localhost:5001/chellez-kitchen/us-central1/loginAdmin',data).then( response => {

            console.log('kjvjghgchchf' + response.data)
            if(response.data.title === 'admin found'){

                localStorage.setItem('account', JSON.stringify(response.data.admin_details))
                localStorage.setItem('admin_staff', response.data.admin_details.fullnames)
                localStorage.setItem('department', response.data.admin_details.department)
                localStorage.setItem('privilege', response.data.admin_details.type)

                commit("login_success", true)
    
              }
        }).catch( err => {

          
            if(err.message === 'Request failed with status code 403'){

              console.log(err.message)
              commit("AddError", 'Admin Not Found!')
            }

            if(err.message === 'Request failed with status code 501'){

              console.log(err.message)
              commit("AddError", 'Internal Server Error. Contact Admin.')
            }

            if(err.message === 'Request failed with status code 401'){

              console.log(err.message)
              commit("AddError", 'Wrong Password!')
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