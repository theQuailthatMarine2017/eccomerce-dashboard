<template>
  <div>
    <!-- <d-alert class="alert-royal-blue" show>
      <i class="fa fa-info mx-2"></i>
      <strong>How you doin'?</strong> I'm just a friendly, good-looking notification message and I come in all the colors you can see below. Pretty cool, huh?
    </d-alert> -->

    <d-container fluid class="main-content-container px-4">

      <!-- Page Header -->
      <!-- <d-row no-gutters class="page-header py-2 pb-4 mb-3 border-bottom">
        <d-col col sm="4" class="text-center text-sm-left mb-4 mb-sm-0"> -->
          <!-- <span class="text-uppercase page-subtitle">Overview</span> -->
          <!-- <h3 class="page-title">Add New Cake</h3>
        </d-col>
      </d-row> -->


      <!-- Colors -->

      <d-row style="margin-top:15px;">
        <d-col lg="12" class="mb-4">
          <d-card ref="menu_form" class="card-small">

            <!-- Form Example -->
            <d-card-header class="border-bottom">
              <h6 class="m-0">Add New Product</h6>
            </d-card-header>

            <d-list-group>
              <d-list-group-item class="p-3">
                <d-row>
                  <d-col ref="products">
                    
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
                        <label>Product Name</label>
                        <d-input v-model="product.title" id="feInputAddress" />
                      </div>

                      <div class="form-group">
                        <label>Product Description</label>
                        <d-input v-model="product.description" id="feInputAddress2" />
                      </div>

                      <div class="form-group">
                        <label >Product Cost</label>
                        <d-input v-model="product.cost" id="feInputAddress2" />
                      </div>

                      <!-- Custom File Upload -->
                      
                  <strong class="text-muted d-block mb-2">Upload Photo</strong>
                  <div class="custom-file mb-3">
                    <input type="file" accept="image/jpeg" @change="onFileChange" class="custom-file-input" id="customFile2" />
                    <label class="custom-file-label">Choose file...</label>
                    
                  </div>

                      <!-- <d-form-row>
                        <d-col md="6" class="form-group">
                          <label for="feInputCity">City</label>
                          <d-input id="feInputCity" />
                        </d-col>
                        <d-col md="4" class="form-group">
                          <label for="feInputState">State</label>
                          <d-select id="feInputState">
                            <option>Choose...</option>
                            <option>...</option>
                          </d-select>
                        </d-col>
                        <d-col md="2" class="form-group">
                          <label for="feInputZip">Zip</label>
                          <d-input id="feInputZip" />
                        </d-col>
                      
                      </d-form-row> -->
                      <button @click="add_item">Add New Product</button>
                   
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
      product:{
        _id:uuid.v1(),
        title:null,
        description:null,
        cost:null,
        img:null,
        available:true
      }
    }
  },
  methods:{
    ...mapActions(["add_Menu"]),
      add_item(){

        this.loader = this.$loading.show({
                    // Optional parameters
                    color: '#ff0000',
                    container: this.$refs.menu_form.$el,
                    canCancel:true,
                    width: 75,
                    height: 75,
                    opacity: 0.7,
                    
                  });

          this.add_Menu(this.product)



      },
      onFileChange(e) {

        var files = e.target.files[0];

        //Convert Image To Base 64 String For Easy Storage
        const reader = new FileReader()

        reader.readAsDataURL(files)

        reader.onload = ()=> {

          this.product.img = reader.result
        };


        
      }
  },
  computed: {
    ...mapGetters(["item_added"])
  },
  watch:{
    ...mapGetters(["item_added"]),
    item_added(val){
      if(val === true){

        console.log('watch activated')
        this.loader.hide()

        alert('Item Added Successfully!')
        

      }
    }
  }
};
</script>
