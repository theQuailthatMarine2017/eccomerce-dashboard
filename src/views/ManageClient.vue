<template>
<d-container fluid class="main-content-container px-4 pb-4">
    <d-row no-gutters class="page-header py-4">
      <!-- Page Title -->
    

    </d-row>
<d-card ref="client" class="card-small" style="background-color:#0386ac;">
    <d-card-header style="background-color:#0386ac;">
              <h6 class="m-0" style="color:white;"><i class="fa fa-user-plus mr-1"></i>Manage Client</h6>
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
                        <v-select placeholder="Click Here To Select.." multiple :options="['VET', 'PET SHOP','BREEDER','TRAINER','GROOMER','ACCOMODATION']" v-model="client.nature"></v-select>
                        
                      </div>


                      <div class="form-group">
                        <label >Business / Service KRA Pin No.</label>
                        <d-input v-model="client.kra" placeholder="Enter Business / Service KRA Pin"  />
                      </div>

                      <div style="margin-bottom:20px;">
                        <label>Business / Service Mobile</label>
                          <vue-tel-input defaultCountry="KE" :mode="mode" :onlyCountries="['KE']" v-model="client.mobile"></vue-tel-input>
                      </div>
               
                  </d-col>

                  <d-col lg="4" ref="products">
                    <div class="form-group">
                        <label >Business / Service Email</label>
                        <d-input  v-model="client.email" placeholder="Enter Business / Service Email"  />
                      </div>

                      <div class="form-group">
                        <label >Business / Service Director(s)</label>
                        <d-input  v-model="client.directors" placeholder="Enter Business / Service Director(s)"  />
                      </div> 

                    <div class="form-group">
                        <label >Business / Service Website</label>
                        <d-input  v-model="client.website" placeholder="Enter Business / Service Webiste"  />
                      </div>

                      <div class="form-group">
                        <label >Business / Service City</label>
                        <d-input  v-model="client.city" placeholder="Enter Business / Service City"  />
                      </div>

                  </d-col>

                  <d-col lg="4" ref="products">

                    <div class="form-group">
                        <label >Business / Service Country</label>
                        <d-input  v-model="client.country" placeholder="Enter Business / Service Country"  />
                      </div>

                      <div class="form-group">
                        <label >Business / Service Location</label>
                        <d-input  v-model="client.location" placeholder="Enter Business / Service Location"  />
                      </div>


                      <div class="form-group">
                        <label >Vet Number (Only If Registering <span style="font-weight:bolder;color:black;">VETS</span>. Write <span style="font-weight:bolder;color:black;">NONE</span> if not a Vet)</label>
                        <d-input  v-model="client.vetNo" placeholder="Enter Vet ID" />
                      </div>

                      <!-- Custom File Upload -->
                      
                  <strong class="text-muted d-block mb-2">Upload Business / Service Logo</strong>
                  <div class="custom-file mb-3">
                    <input type="file" accept="image/jpeg" @change="onFileChange" class="custom-file-input"  />
                    <label class="custom-file-label">Choose file...</label>
                    
                  </div>
                  <d-button @click="updateClient" style="width:230px;background-color:green;color:white;" class="btn-white"><i class="fa fa-user-plus mr-1"></i>Update Business / Service</d-button>

                  </d-col>
                      
                </d-row>
              </d-list-group-item>
            </d-list-group>
</d-card>

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
            client:null,
            mode:'international',
        }
    },
    created(){

        this.client = JSON.parse(localStorage.getItem('client'));
        console.log(this.client)

    },
    mounted(){

        this.client = JSON.parse(localStorage.getItem('client'))
        console.log(this.client)
    },
    methods:{
        ...mapActions(["update_product"]),
        updateClient(){

            console.log(this.client)

            this.loader = this.$loading.show({
                    // Optional parameters
                    color: '#ff0000',
                    container: this.$refs.client.$el,
                    canCancel:true,
                    width: 75,
                    height: 75,
                    opacity: 0.7,
                    
                  });

            this.update_product(this.client)

        },
        onFileChange(e){

            var files = e.target.files[0];


            //Convert Image To Base 64 String For Easy Storage
            const reader = new FileReader()

            reader.readAsDataURL(files)

            reader.onload = ()=> {

              this.client.logo = reader.result

              console.log(this.client.logo)
            };

        },
    },
    computed:{
        ...mapGetters(["updated","errors"]),

    },
    watch:{
        ...mapGetters(["updated","errors"]),
        updated(val){
        if(val === true){

          console.log('updated client')
          this.loader.hide();

          alert('Client Updated Successfully!')

          this.$router.go(-1)
          

        }
      },
      errors(val){

       if(val != null){
          setTimeout(() => {
            
            //
            this.loader.hide()
            this.login_error = val

          },1000)
       }
    }
    }
}
</script>

<style scoped>

</style>