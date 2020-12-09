<template>
  <d-container fluid class="main-content-container px-4 pb-4">
    <!-- Page Header -->
    <d-row no-gutters class="page-header py-4">
      <!-- Page Title -->
      <d-col col sm="4" class="text-center text-sm-left mb-4 mb-sm-0">
        <h3 class="page-title">Manage Cakes</h3>
      </d-col>
    </d-row>

    <d-row>
      <!-- Editor -->
      <div class="col">
        <div class="card card-small mb-4">
          <div class="card-body p-0 pb-3 text-center">
            <table class="table mb-0">
              <thead class="bg-light">
                <tr>
                  <th scope="col" class="border-0">Product</th>
                  <th scope="col" class="border-0">Description</th>
                  <th scope="col" class="border-0">Available</th>
                  <th scope="col" class="border-0">Cost</th>
                  <th scope="col" class="border-0">Edit</th>
                </tr>
              </thead>
              <tbody v-for="item in cakesData" :v-key="item.product">
                <tr>
                  <td>{{item.product}}</td>
                  <td>{{item.description}}</td>
                  <td>{{item.available}}</td>
                  <td>{{item.cost}}</td>
                  <td><button class="buttonEd">EDIT</button></td>
                  <td><button class="buttonDel">Delete</button></td>
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
  </d-container>
</template>

<script>
import SidebarActions from '@/components/add-new-post/SidebarActions.vue';
import SidebarCategories from '@/components/add-new-post/SidebarCategories.vue';
import Editor from '@/components/add-new-post/Editor.vue';

import 'quill/dist/quill.snow.css';

export default {
  components: {
    anpEditor: Editor,
    anpSidebarActions: SidebarActions,
    anpSidebarCategories: SidebarCategories,
  },
  data(){
    return{
      cakesData:[
        {
          product:'Jameson Cake 12KG',
          description:'Fruit Cake Infused With Five Tots of Jameson Whiskey. Great for any occassion',
          available:true,
          cost:11000
          
        },
        {
          product:'Brandy Cake 6KG',
          description:'Fruit Cake Infused With Five Tots of Brandy. Great for Any Occassion',
          available:true,
          cost:8000

        }
      ]
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
</style>
