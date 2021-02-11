<template>
<div>
  <component :is="layout" v-if="signin">
    <router-view/>
  </component>

  <div class="login-page" v-if="!signin">
      <transition name="fade">
         <div class="wallpaper-login"></div>
      </transition>
      <div class="wallpaper-register"></div>

      <div class="container">
         <div class="row">
            <div class="col-lg-4 col-md-6 col-sm-8 mx-auto">
               <div class="card login" ref="signin">
                  <h3 style="text-align:center;">Ununuzi System Portal</h3>
                  <h4 style="text-align:center;">Sign In</h4>
                  <form class="form-group">
                     <input v-model="username" class="form-control" placeholder="Username" required>
                     <input v-model="password" type="password" class="form-control" placeholder="Password" required>
                     
                     <input class="btn btn-primary" v-model="btnname" @click="login">
                  </form>
               </div>

            </div>
         </div>

      </div>
   </div>

</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data(){
    return{
      signin:false,
      btnname:'Sign In',
      username:null,
      password:null
    }
  },
  created(){
    if(localStorage.getItem('admin') != null){

      this.signin = true

    }
  },
  methods:{
    ...mapActions(["login_admin"]),
      login(){

        if(this.username != null && this.password != null){

          this.loader = this.$loading.show({
                    // Optional parameters
                    color: '#ff0000',
                    container: this.$refs.signin.$el,
                    canCancel:true,
                    width: 75,
                    height: 75,
                    opacity: 0.7,
                    
                  });

          this.login_admin({user:this.username,pass:this.password})

        }

      }
  },
  computed: {
    ...mapGetters(["success","err"]),
    layout() {
      return `${this.$route.meta.layout || 'default'}-layout`;
    },
  },
  watch:{
    ...mapGetters(["success"]),
    success(val){
        if(val === true){
            setTimeout(() => {
            
            //
            this.loader.hide()
            this.signin = true

          },1000)
        }
    }

  }
};
</script>

<style lang="scss">
p {
   line-height: 1rem;
}

.card {
   padding: 20px;
}

.form-group {
   input {
      margin-bottom: 20px;
   }
}

.login-page {
   align-items: center;
   display: flex;
   height: 100vh;

   .wallpaper-login {
      background: url(https://img.freepik.com/free-photo/product-package-boxes-shopping-bag-cart-with-laptop-online-shopping-delivery-concept_38716-138.jpg?size=626&ext=jpghttps://image.freepik.com/free-photo/package-boxes-cart-with-laptop-computer-online-shopping-concept_38716-130.jpg)
         no-repeat center center;
      background-size: cover;
      height: 100%;
      position: absolute;
      width: 100%;
   }
   
   .fade-enter-active,
   .fade-leave-active {
  transition: opacity .5s;
}
   .fade-enter,
   .fade-leave-to {
      opacity: 0;
   }
   
   .wallpaper-register {
      background: url(https://i.postimg.cc/ZKST6bgt/New-Project-17.jpg)
         no-repeat center center;
      background-size: cover;
      height: 100%;
      position: absolute;
      width: 100%;
      z-index: -1;
   }

   h1 {
      margin-bottom: 1.5rem;
   }
}

.error {
   animation-name: errorShake;
   animation-duration: 0.3s;
}

@keyframes errorShake {
   0% {
      transform: translateX(-25px);
   }
   25% {
      transform: translateX(25px);
   }
   50% {
      transform: translateX(-25px);
   }
   75% {
      transform: translateX(25px);
   }
   100% {
      transform: translateX(0);
   }
}

</style>
