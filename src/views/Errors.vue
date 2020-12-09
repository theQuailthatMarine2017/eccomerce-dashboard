<template>
  <d-container fluid class="main-content-container px-4 pb-4">

    <!-- Page Header -->
    <d-row no-gutters class="page-header py-4">
      <!-- Page Title -->
      <d-col col sm="4" class="text-center text-sm-left mb-4 mb-sm-0">
        <h3 class="page-title">Manage Admins</h3>
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
                  <th scope="col" class="border-0">Username</th>
                  
                  
                </tr>
              </thead>
              <tbody v-for="item in cakesData" :v-key="item.product">
                <tr>
                  <td>{{item.product}}</td>
                  <td style="width:5px;"><button class="buttonDel">Delete</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
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
          product:'John Doe'
          
        },
        {
          product:'Jane Doe',

        }
      ]
    }
  }
};
</script>
