<template>
  <d-container fluid class="main-content-container px-4 pb-4">
    <!-- Page Header -->
    <d-row no-gutters class="page-header py-4">
      <!-- Page Title -->
      <d-col col sm="4" class="text-center text-sm-left mb-4 mb-sm-0">
        <h3 class="page-title">Manage Products</h3>
      </d-col>
    </d-row>

    <div v-if="cakesData === null || cakesData === []">
<h3>No Data Found!</h3>
    </div>

    <d-row v-if="cakesData != null && !isMobile()">
      <!-- Editor -->
      <div class="col">
        <div class="card card-small mb-4">
          <div class="card-body p-0 pb-3 text-center">
            <table class="table mb-0">
              <thead class="bg-light">
                <tr>
                  <th scope="col" class="border-0">Image</th>
                  <th scope="col" class="border-0">Product</th>
                  <th scope="col" class="border-0">Description</th>
                  <th scope="col" class="border-0">Available</th>
                  <th scope="col" class="border-0">Cost</th>
                  <th scope="col" class="border-0">Actions</th>
                </tr>
              </thead>
              <tbody v-for="item in cakesData" :v-key="item.product">
                <tr>
                  <td> <img width="180" height="110" :src="item.img" type="audio/mpeg"></td>
                  <td>{{item.title}}</td>
                  <td>{{item.description}}</td>
                  <td>{{item.available}}</td>
                  <td>KSH {{item.price}}</td>
                  <td>
                    <d-button size="sm" @click="show(item)" style="margin:5px;background-color:#00BFFF;color:white;" class="btn-white"><i class="far fa-bookmark mr-1"></i>Edit Product</d-button>
                    <d-button size="sm" @click="showPhoto(item._id)" style="margin:5px;background-color:#FFA500;color:white;" class="btn-white"><i class="far fa-bookmark mr-1"></i>Change Photo</d-button>
                    <d-button size="sm" @click="deleteProduct(item._id)" style="margin:5px;background-color:#FF0000;color:white;" class="btn-white"><i class="far fa-bookmark mr-1"></i>Delete Product</d-button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </d-row>
      

      <!-- Sidebar Widgets -->
      <!-- <d-col lg="3" md="12">
        <anp-sidebar-actions />
        <anp-sidebar-categories />
      </d-col> -->
    </d-row>

 <!-- if mobile -->
    
      <d-card v-if="isMobile()" v-for="item in cakesData" :v-key="item.name" ref="menu_form" class="card-small" style="margin-bottom:10px;">
        <d-card-header class="border-bottom">
              <h6 class="m-0">Product Details</h6>
              <p>ProductID: {{item._id}}</p>
            </d-card-header>
      <div style="font-weight:bolder;" class="card-body p-1 pb-3">
        <img width="180" height="110" :src="item.img" type="audio/mpeg">
        <p>Product Name:<br>{{item.title}}</p>
        <p>Product Description:<br>{{item.description}}</p>
        <p>Product Cost:<br>{{item.price}}</p>
        <p>Available:<br>{{item.available}}</p>
        <d-button size="sm" @click="show(item)" style="margin:5px;background-color:#00BFFF;color:white;" class="btn-white"><i class="far fa-bookmark mr-1"></i>Edit Product</d-button>
        <d-button size="sm" @click="showPhoto(item._id)" style="margin:5px;background-color:#FFA500;color:white;" class="btn-white"><i class="far fa-bookmark mr-1"></i>Change Photo</d-button>
        <d-button size="sm" @click="deleteProduct(item._id)" style="margin:5px;background-color:#FF0000;color:white;" class="btn-white"><i class="far fa-bookmark mr-1"></i>Delete Product</d-button>
      </div>
      </d-card>

<!-- Update Menu Section -->
    <modal name="demo-login" ref="updatemenu" transition="pop-out"  :focus-trap="true" :width="320" :height="550">
  <d-container fluid class="main-content-container px-4">

      <d-row style="margin-top:15px;">
        <d-col lg="12" class="mb-4">
          

            <!-- Form Example -->
            <d-card-header class="border-bottom">
              <h6 class="m-0">Update Product</h6>
            </d-card-header>

            <d-list-group>
              <d-list-group-item class="p-3">
                <d-row>
                  <d-col v-if="productUpdate != null">

                    <!-- <strong class="text-muted d-block mb-2">Product Photo</strong>
                  <div class="custom-file mb-3">
                    <input type="file" accept="image/jpeg" :v-model="productUpdate.img" @change="onFileChange" class="custom-file-input" id="customFile2" />
                    <label class="custom-file-label">Choose file...</label>
                    <p style="font-weight:bolder;">If You Do Not Want To Change Photo Don't Click</p>
                    
                  </div> -->
                      <div class="form-group">
                        <label for="feInputAddress">Product Title</label>
                        <d-input id="feInputAddress" v-model="productUpdate.title"/>
                      </div>

                      <div class="form-group">
                        <label for="feInputAddress2">Product Description</label>
                        <d-input id="feInputAddress2" v-model="productUpdate.description" />
                      </div>

                      <div class="form-group">
                        <label for="feInputAddress2">Product Cost</label>
                        <d-input id="feInputAddress2" v-model="productUpdate.price" />
                      </div>

                      <div class="form-group">
                        <p style="font-weight:bold;">Product Availabilty</p>
                        <input type="radio" id="productUpdate.available" name="Availabilty" :value="true" v-model="productUpdate.available" />
                        <label for="productUpdate.available">True</label><br>
                        <input type="radio" id="!available" name="Availabilty" :value="false" v-model="productUpdate.available" />
                        <label for="!available">False</label><br>
                      </div>

                    
                      <d-button @click="updateProduct(productUpdate)">Update Product</d-button>
                  
                  </d-col>
                </d-row>
              </d-list-group-item>
            </d-list-group>

       
        </d-col>
      </d-row>
    </d-container>
</modal>


<!-- Delete Product Modal -->
<modal name="demo-delete" ref="deleteproduct" transition="pop-out"  :focus-trap="true" :height="170" :width="300" >

  <d-card-header class="border-bottom">
              <h6 class="m-0" style="text-align:center;">Delete Product?</h6>
            </d-card-header>
            <d-container fluid class="main-content-container px-4">
              <h6 class="m-0" style="text-align:center;">Action Cannot Be Undone</h6>
            </d-container>
            <d-container fluid class="main-content-container px-4" style="text-align:center;">
              <d-button @click="deleteFinal" style="margin:5px;background-color:red;">Delete Product</d-button>
            <d-button @click="cancelDelete">Cancel</d-button>
            </d-container>

</modal>

<!-- Change Photo Modal -->
<modal name="demo-photo" ref="updatephoto" transition="pop-out"  :focus-trap="true" :height="170" :width="300" >
            <d-card-header class="border-bottom">
              <h6 class="m-0" style="text-align:center;">Upload New Photo</h6>
            </d-card-header>
            <d-container style="margin-top:12px;" fluid class="main-content-container px-4">
                  <div class="custom-file mb-3">
                    <input type="file" accept="image/jpeg,image/jpg" @change="onFileChange" class="custom-file-input" id="customFile2" />
                    <label class="custom-file-label">Choose file...</label>
                    
                  </div>
            </d-container>
            <d-container fluid class="main-content-container px-4" style="text-align:center;">
              <d-button @click="changePhoto" style="margin:5px;background-color:red;">Change Photo</d-button>
            <d-button @click="cancelPhoto">Cancel</d-button>
            </d-container>

</modal>

  </d-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import SidebarActions from '@/components/add-new-post/SidebarActions.vue';
import SidebarCategories from '@/components/add-new-post/SidebarCategories.vue';
import Editor from '@/components/add-new-post/Editor.vue';

import 'quill/dist/quill.snow.css';
import axios from 'axios';

export default {
  components: {
    anpEditor: Editor,
    anpSidebarActions: SidebarActions,
    anpSidebarCategories: SidebarCategories,
  },
  mounted(){

    this.getMenu()

  },
  data(){
    return{
      cakesData:null,
      itemDelete:null,
      productUpdate:{
        title:'',
        description:'',
        price:'',
        availability:''
      },
      newProductImg:{
        _id:'',
        img:null
      }
    }
  },
  methods: {
    ...mapActions(["update_product","deleteproduct"]),
    isMobile(){
            if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
              return true
            } else {
              return false
            }
          },
        getMenu(){

              axios.get('http://localhost:5001/chellez-kitchen/us-central1/getMenu').then( response => {

                  if(response != null){

                    console.log(response.data.menu_final)
                    this.cakesData = response.data.menu_final

                  }

              }).catch( err => {


                if(err.message === 'Request failed with status code 501'){

                  var error_email_mobile = 'Server Error. Please Try Again!'
                  commit("AddError", error_email_mobile)
                }

              })

        },
        onFileChange(e){

            var files = e.target.files[0];

            //Convert Image To Base 64 String For Easy Storage
            const reader = new FileReader()

            reader.readAsDataURL(files)

            reader.onload = ()=> {

              this.newProductImg.img = reader.result

              console.log(this.newProductImg.img)
            };

        },
        showPhoto(id){

          this.newProductImg._id = id

          this.$modal.show('demo-photo');
        },
        cancelPhoto(){
          
        },
        changePhoto(){

          if(this.newProductImg.img != null && this.newProductImg.id != ''){

            this.$modal.hide('demo-photo');

            this.loader = this.$loading.show({
                    // Optional parameters
                    color: '#ff0000',
                    container: this.$refs.updatephoto.$el,
                    canCancel:true,
                    width: 75,
                    height: 75,
                    opacity: 0.7,
                    
                  });

            this.update_product(this.newProductImg)

          }
        },
        show(item) {

          console.log("update" + item)
          this.productUpdate = item
          this.$modal.show('demo-login');

        },
        hide () {
            this.$modal.hide('demo-login');
        },
        updateProduct(productUpdate){

          console.log(productUpdate)

          this.loader = this.$loading.show({
                    // Optional parameters
                    color: '#ff0000',
                    container: this.$refs.updatemenu.$el,
                    canCancel:true,
                    width: 75,
                    height: 75,
                    opacity: 0.7,
                    
                  });

          this.update_product(productUpdate)

        },
        deleteProduct(item_id){

          this.itemDelete = item_id

          this.$modal.show('demo-delete');

        },
        deleteFinal(){

          console.log(this.itemDelete)

          if(this.itemDelete != null){

            this.$modal.hide('demo-photo');

            this.loader = this.$loading.show({
                    // Optional parameters
                    color: '#ff0000',
                    container: this.$refs.deleteproduct.$el,
                    canCancel:true,
                    width: 75,
                    height: 75,
                    opacity: 0.7,
                    
                  });

            this.deleteproduct(this.itemDelete)
          }

        },
        cancelDelete(){

          this.$modal.hide('demo-delete');
        }
    },
    computed:{
      ...mapGetters(["updated","deleted"])
    },
    watch:{
      updated(val){
        if(val === true){

          console.log('updated product')
          this.loader.hide()

          this.$modal.hide('demo-login');

          this.getMenu()

          alert('Product Updated Successfully!')
          

        }
      },
      deleted(val){
        if(val === true){

          console.log('deleted product')
          this.loader.hide()

          this.$modal.hide('demo-delete');

          this.getMenu()

          alert('Product Deleted Successfully!')
          

        }

      }
    }
};
</script>

<style lang="scss">
.buttonEd{
  padding: 5px 20px;
  margin:0px;
  border: 1px solid #ddd;
  color: white;
  background-color:blue;
  border-radius: 4px;
  font-size: 14px;
  font-family: '微软雅黑',arail;
}

.buttonDel{
  padding: 5px 20px;
  border: 1px solid #ddd;
  color: #fff;
  background-color:red;
  border-radius: 4px;
  font-size: 14px;
  font-family: '微软雅黑',arail;
}

.buttonCh{
  padding: 5px 20px;
  border: 1px solid #ddd;
  color: #fff;
  background-color:#90ee90;
  border-radius: 4px;
  font-size: 14px;
  font-family: '微软雅黑',arail;
}
</style>
