<template>
  <d-container fluid class="main-content-container px-4" ref="orders">
    <!-- Page Header -->
    <div class="page-header row no-gutters py-4">
      <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
        <h3 class="page-title">Manage Orders</h3>
      </div>
    </div>
<div v-if="ordersData === null || ordersData === []">
<h3>No Data Found!</h3>
    </div>
    <!-- First Row of Posts -->
    <d-row>
      <d-col lg="12" md="12" sm="12" class="mb-4">
          <!-- Default Light Table -->
    <div v-if="!isMobile()" class="row">
      <div class="col">
        <div class="card card-small mb-4">
          <div class="card-body p-0 pb-3 text-center">
            <table class="table mb-0">
              <thead class="bg-light">
                <tr>
                  <th scope="col" class="border-0">Products Ordered</th>
                  <th scope="col" class="border-0">Order Date & Time</th>
                  <th scope="col" class="border-0">Customer Name</th>
                  <th scope="col" class="border-0">Customer Mobile</th>
                  <th scope="col" class="border-0">Customer Location</th>
                  <th scope="col" class="border-0">Total Cost</th>
                  <th scope="col" class="border-0">Actions</th>
                </tr>
              </thead>
              <tbody v-if="item.complete === false" v-for="item in ordersData" :v-key="item.name">
                <tr>
                  <td>
                    <div>
                      <ol>
                        <li v-for="order in item.order" :v-key="order.title">{{order.title}}</li>
                      </ol>
                    </div>
                    </td>
                  <td>{{moment(item.date_ordered).format('ddd MM Do YYYY HH.mm a')}}</td>
                  <td>{{item.name}}</td>
                  <td>{{item.mobile}}</td>
                  <td>{{item.address}}</td>
                  <td>Ksh{{item.cost}}</td>
                  <td><button class="button" @click="completeOrder(item)">Complete</button><button class="buttonCom" @click="deleteOrder(item._id)">Delete</button></td>
                  
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
      </d-col>
    </d-row>

    <!-- if mobile -->
    
      <d-card v-if="item.complete === false && isMobile()" v-for="item in ordersData" :v-key="item.name" ref="menu_form" class="card-small" style="margin-bottom:10px;width:290px;">
        <d-card-header class="border-bottom">
              <h6 class="m-0">Order Details</h6>
              <p>Order Date & Time:<br>{{moment(item.date_ordered).format('ddd MM Do YYYY HH.mm a')}}</p>
            </d-card-header>
      <div style="font-weight:bolder;" class="card-body p-1 pb-3">
        <p>Products Ordered:<ul>
            <li v-for="order in item.order" :v-key="order.title">{{order.title}}</li>
        </ul></p>
        
        <p>Customer Name:<br>{{item.name}}</p>
        <p>Customer Mobile:<br>{{item.mobile}}</p>
        <p>Customer Address:<br>{{item.address}}</p>
        <p>Total Cost:<br>{{item.cost}}</p>
        <d-button @click="completeOrder(item._id)" style="background-color:#32CD32;margin:5px;">Complete</d-button>
        <d-button @click="deleteOrder(item._id)" style="background-color:red;margin:1px;">Delete</d-button>
      </div>
      </d-card>
    

    <v-dialog />
        
    </modal>

    <!-- Second Row of Posts -->
    <!-- <d-row>
      <d-col v-for="(post, idx) in PostsListTwo" :key="idx" lg="6" sm="12" class="mb-4">
        <d-card class="card-small card-post card-post--aside card-post--1">
          <div class="card-post__image" :style="{ backgroundImage: 'url(\'' + post.backgroundImage + '\')' }">
            <d-badge pill :class="['card-post__category', 'bg-' + post.categoryTheme ]">{{ post.category }}</d-badge>
            <div class="card-post__author d-flex">
              <a href="#" class="card-post__author-avatar card-post__author-avatar--small" :style="{ backgroundImage: 'url(\'' + post.authorAvatar + '\')' }">Written by Anna Ken</a>
            </div>
          </div>
          <d-card-body>
            <h5 class="card-title">
              <a class="text-fiord-blue" href="#">{{ post.title }}</a>
            </h5>
            <p class="card-text d-inline-block mb-3">{{ post.body }}</p>
            <span class="text-muted">{{ post.date }}</span>
          </d-card-body>
        </d-card>
      </d-col>
    </d-row> -->

    <!-- Third Row of Posts -->
    <!-- <d-row>
      <d-col v-for="(post, idx) in PostsListThree" :key="idx" lg="4">
        <d-card class="card-small card-post mb-4">
          <d-card-body>
            <h5 class="card-title">{{ post.title }}</h5>
            <p class="card-text text-muted">{{ post.body }}</p>
          </d-card-body>
          <d-card-footer class="border-top d-flex">
            <div class="card-post__author d-flex">
              <a href="#" class="card-post__author-avatar card-post__author-avatar--small" :style="{ backgroundImage: 'url(\'' + post.authorAvatar + '\')' }">Written by James Khan</a>
              <div class="d-flex flex-column justify-content-center ml-3">
                <span class="card-post__author-name">{{ post.author }}</span>
                <small class="text-muted">{{ post.date }}</small>
              </div>
            </div>
            <div class="my-auto ml-auto">
              <d-button size="sm" class="btn-white">
                <i class="far fa-bookmark mr-1"></i> Bookmark
              </d-button>
            </div>
          </d-card-footer>
        </d-card>
      </d-col>
    </d-row> -->

    <!-- Fourth Row of Posts -->
    <!-- <d-row>
      <d-col v-for="(post, idx) in PostsListFour" :key="idx" lg="3" md="6" sm="12" class="mb-4">
        <d-card class="card-small card-post h-10">
          <div class="card-post__image" :style="{ backgroundImage: 'url(\'' + post.backgroundImage + '\')' }"></div>
          <d-card-body>
            <h5 class="card-title">
              <a class="text-fiord-blue" href="#">{{ post.title }}</a>
            </h5>
            <p class="card-text">{{ post.body }}</p>
          </d-card-body>
          <d-card-footer class="text-muted border-top py-3">
            <span class="d-inline-block">By <a class="text-fiord-blue" :href="post.authorUrl">{{ post.author }}</a> in <a class="text-fiord-blue" :href="post.categoryUrl">{{ post.category }}</a></span>
          </d-card-footer>
        </d-card>
      </d-col>
    </d-row> -->
  </d-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      // PostsListOne,
      // PostsListTwo,
      // PostsListThree,
      // PostsListFour,
      isImageModalActive: false,
      ordersData:null
    };
  },
  created(){

    this.get_orders()

  },
  mounted(){

    this.get_orders()
    
    
  },
  methods:{
    ...mapActions(["get_orders","mark_complete","delete_order"]),
    isMobile(){
            if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
              return true
            } else {
              return false
            }
          },
    completeOrder(item) {
        this.$modal.show('dialog',{title: 'Your Are About to Mark Order Complete',
        text: 'Please Ensure Payment Has Been Made. Action Cannot Be Undone',
        buttons: [
          {
            title: 'Cancel',
            handler: () => {

              this.$modal.hide('dialog')
            }
          },
          {
            title: 'Complete',
            handler: () => {

              this.loader = this.$loading.show({
                    // Optional parameters
                    color: '#ff0000',
                    container: this.$refs.orders.$el,
                    canCancel:true,
                    width: 75,
                    height: 75,
                    opacity: 0.7,
                    
                  });

              this.mark_complete({_id:item._id,customer:item.name,mobile:item.mobile,complete:true})
              
            }
          }
        ]
        });
    },
    deleteOrder(id){
      this.$modal.show('dialog',{title: 'Your Are About to Delete An Order',
        text: 'Please Ensure No Payment Has Been Made. Action Cannot Be Undone',
        buttons: [
          {
            title: 'Cancel',
            handler: () => {
              this.$modal.hide('dialog')
            }
          },
          {
            title: 'Delete',
            handler: () => {

              this.loader = this.$loading.show({
                    // Optional parameters
                    color: '#ff0000',
                    container: this.$refs.orders.$el,
                    canCancel:true,
                    width: 75,
                    height: 75,
                    opacity: 0.7,
                    
                  });

              this.delete_order({_id:id})

            }
          }
        ]
        });
    }
  },
  computed:{
    ...mapGetters(["orders","complete","order_delete"]),
  },
  watch:{
    orders(val){
      if(val != null){
        console.log(val)
        this.ordersData = val
      }
    },
    complete(val){
      if(val === true){

        this.$modal.hide('dialog');
        this.loader.hide()
        this.get_orders()
        alert('Order Marked Complete!')

      }
    },
    order_delete(val){
      if(val === true){

        this.$modal.hide('dialog');
        this.loader.hide()
        this.get_orders()
        alert('Order Deleted!')

      }
    }
  }
};
</script>

<style lang="scss">
.button{
  padding: 5px 20px;
  border: 1px solid #ddd;
  color: white;
  background-color:green;
  border-radius: 4px;
  font-size: 14px;
  font-family: '微软雅黑',arail;
}

.buttonCom{
  padding: 5px 20px;
  border: 1px solid #ddd;
  color: #fff;
  background-color:red;
  border-radius: 4px;
  font-size: 14px;
  font-family: '微软雅黑',arail;
}
</style>

