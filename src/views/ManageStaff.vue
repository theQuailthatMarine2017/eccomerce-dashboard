<template>
<d-container fluid class="main-content-container px-4 pb-4">
    <!-- Page Header -->
    <d-row no-gutters class="page-header py-4">
      <!-- Page Title -->
      <d-col col sm="4" class="text-center text-sm-left mb-4 mb-sm-0">
        <h3 class="page-title">Manage Staff / Admin</h3>

        <div v-if="admin_staff != null" style="margin-top:15px;">
        <d-row>
          <d-col col lg="12">
        <i style="color:#0386ac;" class="fa fa-search fa-lg mr-1"></i><input style="border-color:#0386ac;height:33px;width:300px;padding:13px;border:0;border-radius:12px;" placeholder="Search Business by Name or Location..." type="text"  v-model="query.search_input">
          </d-col>
        </d-row>
        </div>


      </d-col>

    </d-row>

    <div v-if="admin_staff === null && denied === false">
<h3>No Data Found!</h3>
    </div>

    <div style="border-radius:12px;padding:40px;background-color:red;text-align:center;" v-if="denied === true">
      <img width="110" height="105" src="https://i.postimg.cc/KvNgwByj/toppng-com-abort-delete-cancel-icon-cross-no-access-denied-deny-access-icon-719x720.png">
<h5 style="color:white;">You Are Not Allowed To View This Page!<br> Contact IT Admin To Be Granted Access!</h5>
    </div>

    <!-- <d-container style="margin:0px;">
    <input placeholder="Search Client Name..." type="text" style="width:340px;" v-model="query.search_input">
    <d-button size="md" style="margin:5px;background-color:#00BFFF;color:white;" class="btn-white"><i class="far fa-bookmark mr-1"></i>Search Client</d-button>
    </d-container> -->

    <d-row v-if="admin_staff != null">
      <!-- Editor -->
      
            <table style="border-color:#0386ac;border-width:7px;">
              <thead style="background-color:#0386ac;color:white;font-size:18px;font-family:Trebuchet MS;">
                <tr>
                  
                  <th scope="col" class="border-0">Photo</th>
                  <th scope="col" class="border-0">Full Names</th>
                  <th scope="col" class="border-0">Phone</th>
                  <th scope="col" class="border-0">Email</th>
                  <th scope="col" class="border-0">Department</th>
                  <th scope="col" class="border-0">Actions</th>
                </tr>
              </thead>
              <tbody>

                <tr :v-if="query.search_input != null" v-for="(row, index) in filteredRows" :key="index">
                  <td><img width="110" height="105" :src="row.img" type="audio/mpeg"></td>
                  <td style="width:200px;" v-html="highlightMatches(row.fullnames)"></td>
                  <td style="width:200px;" v-html="row.mobile"></td>
                  <td style="width:200px;" v-html="row.email"></td>
                  <td v-html="highlightMatches(row.department)"></td>
                  <td>
                    <d-button size="sm" style="width:150px;margin:5px;background-color:green;color:white;" class="btn-white"><i class="far fa-edit mr-1"></i>View Sales</d-button>
                    <d-button size="sm" @click="deleteProduct(row.national_id)" style="width:150px;margin:5px;background-color:#FF0000;color:white;" class="btn-white"><i class="far fa-bookmark mr-1"></i>Delete Admin / Staff</d-button>
                  </td>
                </tr>
                
                <!-- <tr>
                

                  <td><img width="180" height="110" :src="item.logo" type="audio/mpeg"></td>
                  <td>{{item.name}}</td>
                  <td>{{item.mobile}}</td>
                  <td>{{item.email}}</td>
                  <td>{{item.kra}}</td>
                  <td>{{item.location}}</td>
                  <td>{{item.vetNo}}</td>
                  <td>{{item.suspended}}</td>
                  <td>
                    <d-button size="sm" @click="show(item)" style="margin:5px;background-color:#00BFFF;color:white;" class="btn-white"><i class="far fa-bookmark mr-1"></i>Edit Client</d-button>
                    <d-button size="sm" style="margin:5px;background-color:green;color:white;" class="btn-white"><i class="far fa-bookmark mr-1"></i>View Sales</d-button>
                    <d-button size="sm" @click="showPhoto(item._id)" style="margin:5px;background-color:#FFA500;color:white;" class="btn-white"><i class="far fa-bookmark mr-1"></i>Change Photo</d-button>
                    <d-button size="sm" @click="deleteProduct(item._id)" style="margin:5px;background-color:#FF0000;color:white;" class="btn-white"><i class="far fa-bookmark mr-1"></i>Delete Client</d-button>
                  </td>
                </tr> -->
              </tbody>
            </table>
               
    </d-row>

</d-container>
</template>


<script>
import { mapGetters, mapActions } from "vuex";


export default {
    data(){
        return{
            query: {
            search_input: ''
            },
            admin_staff:null,
            denied:true
        }
    },
    created(){

      //Check if logged in user is admin if not not allowed to view meesage
      if(localStorage.getItem('privilege') === 'Admin'){

        this.get_admin_staff()
        this.denied = false

      }
    },
    mounted(){

      if(localStorage.getItem('privilege') === 'Admin'){

        this.get_admin_staff()
        
        this.denied = false

      }

    },
    methods:{
      ...mapActions(["get_admin_staff"]),
      highlightMatches(text) {

        if(text != undefined){

          const matchExists = text.toLowerCase().includes(this.query.search_input.toLowerCase());
          if (!matchExists) return text;

          const re = new RegExp(this.query.search_input, 'ig');
          return text.replace(re, matchedText => `<strong>${matchedText}</strong>`);
        }
        },

    },
    computed:{
      ...mapGetters(["staff_admin"]),
      filteredRows(){
        if(this.admin_staff != null){

          return this.admin_staff.filter((row) => {

          const staff_name = row.fullnames.toLowerCase();

          if(row.department != undefined){

            const staff_department = row.department.toLowerCase();
          

            const searchTerm = this.query.search_input.toLowerCase();

            return staff_name.includes(searchTerm) || staff_department.includes(searchTerm);
          }
          

        });
        }
        
      }
    },
    watch:{
      ...mapGetters(["staff_admin"]),
      staff_admin(val){
        if(val != null){

          
          this.admin_staff = val;

          console.log(this.admin_staff)

        }
      }

    }
}
</script>

<style scoped>

</style>