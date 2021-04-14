<template>
  <div>
    <!-- <d-alert class="alert-royal-blue" show>
      <i class="fa fa-info mx-2"></i>
      <strong>How you doin'?</strong> I'm just a friendly, good-looking notification message and I come in all the colors you can see below. Pretty cool, huh?
    </d-alert> -->

    <d-container fluid class="main-content-container px-4">
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
          <d-card ref="menu_form" class="card-small" style="background-color:#0386ac;">

            <!-- Form Example -->
            <d-card-header style="background-color:#0386ac;">
              <h6 class="m-0" style="color:white;"><i class="fa fa-user-plus mr-1"></i>Add New Business / Service</h6>
            </d-card-header>

            <d-list-group>
              <d-list-group-item class="p-3">
                <d-row>
                  <d-col lg="4" ref="products">
                    
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
                        <label>Business / Service Name</label>
                        <d-input v-model="client.name" id="feInputAddress" placeholder="Enter Business / Service Name" />
                      </div>

                      <div class="form-group">
                        <label>Business / Service Nature of Business. Click Below To Select. <br><span style="font-weight:bolder;font-size:13px;color:black;">You Can Assign More Than One Nature Of Business.</span></label>
                        <v-select placeholder="Click Here To Select.." multiple :options="['VET', 'PET SHOP','PET BREEDER','FARM ANIMAL BREEDER','TRAINER','GROOMER','ACCOMODATION']" v-model="client.nature"></v-select>
                        
                      </div>


                      <div class="form-group">
                        <label >Business / Service KRA Pin No.</label>
                        <d-input v-model="client.kra" placeholder="Enter Business / Service KRA Pin" id="feInputAddress2" />
                      </div>

                      <div style="margin-bottom:20px;">
                        <label>Business / Service Mobile</label>
                          <vue-tel-input defaultCountry="KE" :mode="mode" :onlyCountries="['KE']" v-model="client.mobile"></vue-tel-input>
                      </div>
               
                  </d-col>

                  <d-col lg="4" ref="products">
                    <div class="form-group">
                        <label >Business / Service Email</label>
                        <d-input  v-model="client.email" placeholder="Enter Business / Service Email" id="feInputAddress2" />
                      </div>

                      <div class="form-group">
                        <label >Business / Service Director(s)</label>
                        <d-input  v-model="client.directors" placeholder="Enter Business / Service Director(s)" id="feInputAddress2" />
                      </div> 

                    <div class="form-group">
                        <label >Business / Service Website</label>
                        <d-input  v-model="client.website" placeholder="Enter Business / Service Webiste" id="feInputAddress2" />
                      </div>

                      <div class="form-group">
                        <label >Business / Service City</label>
                        <d-input  v-model="client.city" placeholder="Enter Business / Service City" id="feInputAddress2" />
                      </div>

                  </d-col>

                  <d-col lg="4" ref="products">

                    <div class="form-group">
                        <label >Business / Service Country</label>
                        <d-input  v-model="client.country" placeholder="Enter Business / Service Country" id="feInputAddress2" />
                      </div>

                      <div class="form-group">
                        <label >Business / Service Location</label>
                        <d-input  v-model="client.location" placeholder="Enter Business / Service Location" id="feInputAddress2" />
                      </div>


                      <div class="form-group">
                        <label >Vet Number (Only If Registering <span style="font-weight:bolder;color:black;">VETS</span>. Write <span style="font-weight:bolder;color:black;">NONE</span> if not a Vet)</label>
                        <d-input  v-model="client.vetNo" placeholder="Enter Vet ID" id="feInputAddress2" />
                      </div>

                      <!-- Custom File Upload -->
                      
                  <strong class="text-muted d-block mb-2">Upload Business / Service Logo</strong>
                  <div class="custom-file mb-3">
                    <input type="file" accept="image/jpeg" @change="onFileChange" class="custom-file-input" id="customFile2" />
                    <label class="custom-file-label">Choose file...</label>
                    
                  </div>
                  <h6 class="m-0" style="font-weight:bold;font-size:12px;color:black;margin:5px;">Please Make Sure All Fields Are Filled Correctly!</h6>
                  <d-button @click="add_item" style="width:230px;background-color:green;color:white;" class="btn-white"><i class="fa fa-user-plus mr-1"></i>Add New Business / Service</d-button>

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
import { mapGetters, mapActions } from "vuex";
import { uuid } from 'vue-uuid';

export default {
  data(){
    return{
      mode:'international',
      // vet:null,
      // shop:null,
      // trainer:null,
      // breeder:null,
      // groomer:null,
      // accomodation:null,
      client:{
        _id:uuid.v1(),
        name:null,
        nature:null,
        mobile:null,
        email:null,
        logo:null,
        directors:null,
        location:null,
        city:null,
        country:null,
        kra:null,
        website:null,
        vetNo:null,
        assignedBy:null
      },
      denied:true
    }
  },
  created(){
    if(localStorage.getItem('privilege') === 'Admin'){

        this.denied = false

      }

  },
  methods:{
    ...mapActions(["add_Client"]),
      add_item(){

        //First get admin/staff id saved in localstorage and make sure no field in object is null

        var staff = localStorage.getItem('admin_staff')

        this.client.assignedBy = staff
        
        this.loader = this.$loading.show({
                    // Optional parameters
                    color: '#ff0000',
                    container: this.$refs.menu_form.$el,
                    canCancel:true,
                    width: 75,
                    height: 75,
                    opacity: 0.7,
                    
                  });

          this.add_Client(this.client)

      },
      onFileChange(e) {

        var files = e.target.files[0];

        //Convert Image To Base 64 String For Easy Storage
        const reader = new FileReader()

        reader.readAsDataURL(files)

        reader.onload = ()=> {

          this.client.logo = reader.result
        };


        
      }
  },
  computed: {
    ...mapGetters(["client_added"])
  },
  watch:{
    ...mapGetters(["client_added"]),
    client_added(val){
      if(val === true){

        console.log('watch activated')
        this.loader.hide()

        alert('Client Added Successfully!')
        

      }
    }
  }
};
</script>
