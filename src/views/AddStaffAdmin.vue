<template>
<div>
    <!-- <d-alert class="alert-royal-blue" show>
      <i class="fa fa-info mx-2"></i>
      <strong>How you doin'?</strong> I'm just a friendly, good-looking notification message and I come in all the colors you can see below. Pretty cool, huh?
    </d-alert> -->

    

    <d-container fluid class="main-content-container px-4" >

        <div style="margin:30px;border-radius:12px;padding:40px;background-color:red;text-align:center;" v-if="denied === true">
      <img width="110" height="105" src="https://i.postimg.cc/KvNgwByj/toppng-com-abort-delete-cancel-icon-cross-no-access-denied-deny-access-icon-719x720.png">
<h5 style="color:white;">You Are Not Allowed To View This Page!<br> Contact IT Admin To Be Granted Access!</h5>
    </div>
      <!-- Page Header -->
      <!-- <d-row no-gutters class="page-header py-2 pb-4 mb-3 border-bottom">
        <d-col col sm="4" class="text-center text-sm-left mb-4 mb-sm-0"> -->
          <!-- <span class="text-uppercase page-subtitle">Overview</span> -->
          <!-- <h3 class="page-title">Add New Cake</h3>
        </d-col>
      </d-row> -->


      <!-- Colors -->

      <d-row style="margin-top:15px;" v-if="denied === false">
        <d-col lg="12" class="mb-4">
          <d-card ref="staffs" class="card-small" style="background-color:#0386ac;">

            <!-- Form Example -->
            <d-card-header style="background-color:#0386ac;">
              <h6 class="m-0" style="color:white;"><i class="fa fa-user-plus mr-1"></i>Add New Staff / Admin</h6>
            </d-card-header>

            <d-list-group>
              <d-list-group-item class="p-3">
                <d-row>
                  <d-col lg="6" ref="products">
                    
                      <!-- <d-form-row>
                        <d-col md="6" class="form-group">
                          <label for="feEmailAddress">Email</label>
                          <d-input id="feEmailAddress" type="email" placeholder="Email" />
                        </d-col>
                        <d-col md="6">
                          <label for="fePassword">Password</label>
                          <d-input id="fePassword" type="password" placeholder="Password" />
                        </d-col>
                      </d-form-row> -->

                      <div class="form-group">
                        <label>Staff / Admin Full Names</label>
                        <d-input v-model="admin_staff.fullnames"  placeholder="Enter Staff / Admin Full Names" />
                      </div>

                      <div style="margin-bottom:20px;">
                        <label>Staff / Admin Mobile</label>
                          <vue-tel-input defaultCountry="KE" :mode="mode" :onlyCountries="['KE']" v-model="admin_staff.mobile"></vue-tel-input>
                      </div>

                      <div class="form-group">
                        <label>Staff / Admin Email</label>
                        <d-input v-model="admin_staff.email"  placeholder="Enter Staff / Admin Email" />
                      </div>

                      <div class="form-group">
                        <label>Select Account Type </label>
                        <v-select placeholder="Click Here To Select.." :options="['Admin','Staff']" v-model="admin_staff.staff_type"></v-select>
                        
                      </div>


                      <div class="form-group">
                        <label >Staff / Admin KRA Pin No.</label>
                        <d-input v-model="admin_staff.kra" placeholder="Enter Staff / Admin KRA Pin"  />
                      </div>

                      <div class="form-group">
                        <label >Staff / Admin National ID No.</label>
                        <d-input v-model="admin_staff.nationalID" placeholder="Enter Staff / Admin National ID"  />
                      </div>

               
                  </d-col>


                  <d-col lg="6" ref="products">


                <strong class="text-muted d-block mb-2">Upload Employee Photo</strong>
                  <div class="custom-file mb-3">
                    <input type="file" accept="image/jpeg" @change="onFileChange" class="custom-file-input" id="customFile2" />
                    <label class="custom-file-label">Choose file...</label>
                  </div>

                      <div class="form-group">
                        <label>Select Staff / Admin Department </label>
                        <v-select placeholder="Click Here To Select.." :options="['IT Department','Sales Department','Human Resources','Marketing Department','Accounts Department']" v-model="admin_staff.department"></v-select>
                        
                      </div>

                      <div class="form-group">
                        <label >Staff / Admin Bank</label>
                        <d-input v-model="admin_staff.bank" placeholder="Enter Staff / Admin Bank Name"  />
                      </div>

                      <div class="form-group">
                        <label >Staff / Admin Bank Branch</label>
                        <d-input v-model="admin_staff.bankBranch" placeholder="Enter Staff / Admin Bank Branch"  />
                      </div>

                      <div class="form-group">
                        <label >Staff / Admin Bank No.</label>
                        <d-input v-model="admin_staff.bankNo" placeholder="Enter Staff / Admin Bank No." />
                      </div>
                  <h6 class="m-0" style="font-weight:bold;font-size:12px;color:black;margin:5px;">Please Make Sure All Fields Are Filled Correctly!</h6>
                  <d-button @click="add_staff_admin" style="width:230px;background-color:green;color:white;" class="btn-white"><i class="fa fa-user-plus mr-1"></i>Add New Staff / Admin</d-button>

                  </d-col>
                      
                </d-row>
              </d-list-group-item>
            </d-list-group>

          </d-card>
        </d-col>
      </d-row>
    </d-container>
  </div>

</template>


<script>
import { uuid } from 'vue-uuid';
import { mapGetters, mapActions } from "vuex";

export default {
    data(){
        return{
            admin_staff:{
                _id:uuid.v1(),
                fullnames:null,
                nationalID:null,
                staff_type:null,
                img:null,
                mobile:null,
                email:null,
                department:null,
                bank:null,
                bankBranch:null,
                bankNo:null,
                kra:null,
                assignedBy:null
            },
            mode:'international',
            denied:true
        }
    },
    created(){
        if(localStorage.getItem('privilege') === 'Admin'){

        this.denied = false

      }
    },
    methods:{
        ...mapActions(["add_Admin_Staff"]),
        onFileChange(e) {

        var files = e.target.files[0];

        //Convert Image To Base 64 String For Easy Storage
        const reader = new FileReader();

        reader.readAsDataURL(files);

        reader.onload = ()=> {

          this.admin_staff.img = reader.result
        };


        
      },
      add_staff_admin(){

          var staff = localStorage.getItem('admin_staff')

          this.admin_staff.assignedBy = staff
        
          this.loader = this.$loading.show({
                    // Optional parameters
                    color: '#ff0000',
                    container: this.$refs.staffs.$el,
                    canCancel:true,
                    width: 75,
                    height: 75,
                    opacity: 0.7,
                    
                });

           this.add_Admin_Staff(this.admin_staff)

      }
    },
    computed:{
        ...mapGetters(["staff_admin_added"]),
    },
    watch:{
        ...mapGetters(["staff_admin_added"]),
        staff_admin_added(val){
            if(val === true){

                console.log('watch activated')
                this.loader.hide()

                alert('Client Added Successfully!')
            }
        }

    }
}
</script>

<style scoped>

</style>