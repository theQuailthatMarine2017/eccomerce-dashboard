<template>
  <d-container fluid class="main-content-container px-4 pb-4">
    <!-- Page Header -->
    <d-row no-gutters class="page-header py-4">
      <!-- Page Title -->
      <d-col col sm="4" class="text-center text-sm-left mb-4 mb-sm-0">
        <h3 class="page-title">Manage Business / Services</h3>

        
        <div v-if="cakesData != null"  style="margin-top:15px;">
        <d-row>
          <d-col col lg="12">
        <i style="color:#0386ac;" class="fa fa-search fa-lg mr-1"></i><input style="border-color:#0386ac;height:33px;width:300px;padding:13px;border:0;border-radius:12px;" placeholder="Search Business by Name or Location..." type="text"  v-model="query.search_input">
        <d-button @click="exportCSV(filteredRows)" style="margin-top:10px;margin-bottom:0;background-color:green;color:white;" class="btn-white"><i class="fa fa-file-export mr-1"></i>Export Data as CSV</d-button>
          </d-col>

          <!-- <d-col col lg="12">
            <d-button @click="updateClient" style="width:230px;background-color:green;color:white;" class="btn-white"><i class="fa fa-user-plus mr-1"></i>Update Business / Service</d-button>
          </d-col> -->
        </d-row>

        </div>


      </d-col>

    </d-row>
    

    <div v-if="cakesData === null  && denied === false">
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

    <d-row v-if="cakesData != null">
      <!-- Editor -->
      
            <table style="border-color:#0386ac;border-width:7px;">
              <thead style="background-color:#0386ac;color:white;font-size:18px;font-family:Trebuchet MS;">
                <tr>
                  
                  <th scope="col" class="border-0">Logo</th>
                  <th scope="col" class="border-0">Name</th>
                  <th scope="col" class="border-0">Phone</th>
                  <th scope="col" class="border-0">Email</th>
                  <th scope="col" class="border-0">Location</th>
                  <th scope="col" class="border-0">Suspended</th>
                  <th scope="col" class="border-0">Assigned By</th>
                  <th scope="col" class="border-0">Actions</th>
                </tr>
              </thead>
              <tbody>

                <tr :v-if="query.search_input != null" v-for="(row, index) in filteredRows" :key="index">
                  <td><img width="110" height="105" :src="row.logo" type="audio/mpeg"></td>
                  <td style="width:200px;height:10px;" v-html="highlightMatches(row.name)"></td>
                  <td v-html="row.mobile"></td>
                  <td v-html="row.email"></td>
                  <td v-html="highlightMatches(row.location)"></td>
                  <td v-html="row.suspended"></td>
                  <td style="width:200px;" v-html="row.assignedBy"></td>
                  <td>
                    <d-button size="sm" @click="show(row)" style="width:130px; margin:5px;background-color:#00BFFF;color:white;" class="btn-white"><i class="far fa-edit mr-1"></i>Manage Client</d-button>
                    <d-button size="sm" style="width:130px;margin:5px;background-color:green;color:white;" class="btn-white"><i class="fa fa-eye mr-1"></i>View Sales</d-button>
                    <d-button size="sm" @click="deleteProduct(row._id)" style="width:130px;margin:5px;background-color:#FF0000;color:white;" class="btn-white"><i class="fa fa-trash-alt mr-1"></i>Delete Client</d-button>
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
      

      <!-- Sidebar Widgets -->
      <!-- <d-col lg="3" md="12">
        <anp-sidebar-actions />
        <anp-sidebar-categories />
      </d-col> -->
    </d-row>

 <!-- if mobile -->
    
      <!-- <d-card v-if="isMobile()" v-for="item in cakesData" :v-key="item.name" ref="menu_form" class="card-small" style="margin-bottom:10px;">
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
      </d-card> -->


<!-- Delete Product Modal -->
<modal name="demo-delete" ref="deleteproduct" transition="pop-out"  :focus-trap="true" :height="170" :width="300" >

  <d-card-header class="border-bottom">
              <h6 class="m-0" style="text-align:center;">Delete Business / Service?</h6>
            </d-card-header>
            <d-container fluid class="main-content-container px-4">
              <h6 class="m-0" style="text-align:center;">Action Cannot Be Undone</h6>
            </d-container>
            <d-container fluid class="main-content-container px-4" style="text-align:center;">
              <d-button @click="deleteFinal" style="margin:5px;background-color:red;">Delete Business / Service</d-button>
            <d-button @click="cancelDelete">Cancel</d-button>
            </d-container>

</modal>

<!-- Change Photo Modal
<modal name="demo-photo" ref="updatephoto" transition="pop-out"  :focus-trap="true" :height="170" :width="300" >
            <d-card-header class="border-bottom">
              <h6 class="m-0" style="text-align:center;">Upload New Business Logo</h6>
            </d-card-header>
            <d-container style="margin-top:12px;" fluid class="main-content-container px-4">
                  <div class="custom-file mb-3">
                    <input type="file" accept="image/jpeg,image/jpg" @change="onFileChange" class="custom-file-input" id="customFile2" />
                    <label class="custom-file-label">Choose file...</label>
                    
                  </div>
            </d-container>
            <d-container fluid class="main-content-container px-4" style="text-align:center;">
              <d-button @click="changePhoto" style="margin:5px;background-color:red;">Change Logo</d-button>
            <d-button @click="cancelPhoto">Cancel</d-button>
            </d-container>

</modal> -->

  </d-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import SidebarActions from '@/components/add-new-post/SidebarActions.vue';
import SidebarCategories from '@/components/add-new-post/SidebarCategories.vue';
import Editor from '@/components/add-new-post/Editor.vue';

import 'quill/dist/quill.snow.css';
import axios from 'axios';
import Papa from "papaparse";


export default {
  components: {
    anpEditor: Editor,
    anpSidebarActions: SidebarActions,
    anpSidebarCategories: SidebarCategories,
  },
  created(){

    if(localStorage.getItem('privilege') === 'Admin'){

        this.getMenu()

        this.denied = false
      }
    
  },
  mounted(){

     if(localStorage.getItem('privilege') === 'Admin'){

        this.getMenu()
        this.denied = false

      }

  },
  data(){
    return{
      cakesData:null,
      search: '',
      denied:true,
      // headers: [
      //   { text: 'Logo', value: 'logo' },
      //   { text: 'Name', value: 'name' },
      //   { text: 'Email', value: 'nature' },
      //   { text: 'Website', value: 'mobile' },
      //   { text: 'Action', value: 'email', sortable: false },
      //   { text: 'KRA', value: 'kra' },
      //   { text: 'Directors', value: 'directors' },
      //   { text: 'Website', value: 'website' },
      //   { text: 'Location', value: 'location' },
      //   { text: 'vetNo', value: 'vetNo' },
      //   { text: 'Suspended', value: 'suspended' },
      //   { text: 'Action', value: 'action', sortable: false }
      // ],
      query: {
          search_input: ''
        },
      itemDelete:null
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
          exportCSV(csv){

            var blob = new Blob([Papa.unparse(csv)], { type: 'text/csv;charset=utf-8;' });

            var link = document.createElement("a");
            var url = URL.createObjectURL(blob);
            link.setAttribute("href", url);
            link.setAttribute("download", 'filename.csv');
            link.style.visibility = 'hidden';


            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

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
        // onFileChange(e){

        //     var files = e.target.files[0];


        //     //Convert Image To Base 64 String For Easy Storage
        //     const reader = new FileReader()

        //     reader.readAsDataURL(files)

        //     reader.onload = ()=> {

        //       this.newProductImg.img = reader.result

        //       console.log(this.newProductImg.img)
        //     };

        // },
        // showPhoto(id){

        //   this.newProductImg._id = id

        //   this.$modal.show('demo-photo');
        // },
        highlightMatches(text) {
          const matchExists = text.toLowerCase().includes(this.query.search_input.toLowerCase());
          if (!matchExists) return text;

          const re = new RegExp(this.query.search_input, 'ig');
          return text.replace(re, matchedText => `<strong>${matchedText}</strong>`);
        },
        // changePhoto(){

        //   if(this.newProductImg.img != null && this.newProductImg.id != ''){

        //     this.$modal.hide('demo-photo');

        //     this.loader = this.$loading.show({
        //             // Optional parameters
        //             color: '#ff0000',
        //             container: this.$refs.updatephoto.$el,
        //             canCancel:true,
        //             width: 75,
        //             height: 75,
        //             opacity: 0.7,
                    
        //           });

        //     this.update_product(this.newProductImg)

        //   }
        // },
        show(row) {
          //Pass row._id as the query string for URL and pass the client update object
          localStorage.setItem('client',JSON.stringify(row))
          this.$router.push({ name: 'manage-client', query: { client: row._id, name:row.name }})

        },
        hide () {
            this.$modal.hide('demo-login');
        },
        isMobile(){
            if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
              return true
            } else {
              return false
            }
          },
        // updateProduct(productUpdate){

        //   console.log(productUpdate)

        //   this.loader = this.$loading.show({
        //             // Optional parameters
        //             color: '#ff0000',
        //             container: this.$refs.updatemenu.$el,
        //             canCancel:true,
        //             width: 75,
        //             height: 75,
        //             opacity: 0.7,
                    
        //           });

        //   this.update_product(productUpdate)

        // },
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
      ...mapGetters(["deleted"]),
      filteredRows(){
        return this.cakesData.filter((row) => {

          const client_name = row.name.toLowerCase();
          const client_location = row.location.toLowerCase();

          const searchTerm = this.query.search_input.toLowerCase();

          return client_name.includes(searchTerm) || client_location.includes(searchTerm);

        });
      }
    },
    watch:{
      ...mapGetters(["deleted"]),
      deleted(val){
        if(val === true){

          console.log('deleted client')
          this.loader.hide()

          this.$modal.hide('demo-delete');

          this.getMenu()

          alert('Client Deleted Successfully!')
          

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

table {
    width: 100%;
    border-spacing: 0;
    border: 1px solid #DDDDDD;
    border-radius: 4px;
}

table caption {
    background-color: #333333;
    color: #FFFFFF;
    padding: 8px;
    border-radius: 4px;
    margin-bottom: 10px;
}

thead {
    text-align: left;
}

thead th:first-child {
    border-radius: 4px 0 0 0;
}
    
thead th:last-child {
    border-radius: 0 4px 0 0;
}

thead th {
    padding: 8px;
}

thead th + th {
    border-left: 1px solid #DDDDDD;
}

tbody tr:nth-of-type(odd) {
    background: #F9F9F9;
}

tbody tr:last-child td:first-child {
    border-radius: 0 0 0 4px;
}

tbody tr:last-child td:last-child {
    border-radius: 0 0 4px 0;
}

tbody tr td {
    padding: 8px;
    border-top: 1px solid #DDDDDD;
}

tbody tr td + td {
    border-left: 1px solid #DDDDDD;
}


/* Large desktop */
@media (min-width: 1200px) {
    
    
    
}

/* Portrait tablet to landscape and desktop */
@media (min-width: 768px) and (max-width: 979px) {
    
    table {
        border: none;
    }
    
    table, caption, thead, tbody, th, td, tr {
        display: block;
    }
    
    thead { 
        display: none;
    }
    
    tbody tr {
        border: 1px solid #DDDDDD;
        border-radius: 5px;
    }
    
    tbody tr + tr {
        margin-top: 10px;
    }
    
    tbody tr td {
        border: none;
    }
    
    tbody tr td + td {
        border-top: 1px solid #DDDDDD;
        border-left: none;
    }
    
    tbody tr td:before {
        font-weight: bold;
        float: left;
        width: 30%;
        content: attr(data-head);
    }
    
}

/* Landscape phone to portrait tablet */
@media (max-width: 767px) {
    
    table {
        border: none;
    }
    
    table, caption, thead, tbody, th, td, tr {
        display: block;
    }
    
    thead { 
        display: none;
    }
    
    tbody tr {
        border: 1px solid #DDDDDD;
        border-radius: 5px;
    }
    
    tbody tr + tr {
        margin-top: 10px;
    }
    
    tbody tr td {
        border: none;
    }
    
    tbody tr td + td {
        border-top: 1px solid #DDDDDD;
        border-left: none;
    }
    
    tbody tr td:before {
       font-size: 0.7em;
       font-weight: bold;
       display: block;
       content: attr(data-head);
    }
    
}

/* Landscape phones and down */
@media (max-width: 480px) {
    
    
    
}


</style>
