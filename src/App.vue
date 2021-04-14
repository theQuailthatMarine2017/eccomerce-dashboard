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

      <div class="container" style="margin-top:50px;">
         <div class="row">
            <div class="col-lg-4 col-md-6 col-sm-8 mx-auto">
               <div class="card login" style="background-color:#0099CC;" ref="signin">
                  <h5 style="text-align:center;color:white;">Pet Connect Dashboard</h5>
                  <h4 style="text-align:center;color:white;">Sign In</h4>
                  <form class="form-group">
                     <input v-model="username" class="form-control" placeholder="National ID No." required>
                     <input v-model="password" type="password" class="form-control" placeholder="Password" required>
                     
                  </form>
                  <d-button size="sm" @click="login" style="margin-bottom:19px;min-width:280px;text-align:center;font-size:15px;background-color:#00BFFF;color:white;" class="btn-white"><i class="fa fa-sign-in-alt fa-lg mr-1"></i>Login</d-button>
                  <div v-if="login_error != null" style="background-color:red;text-align:center;color:white;">
                     <p style="margin:10px;">{{login_error}}<br>Contact Administrator If Issue Continues</p>
                  </div>
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
      login_error:null,
      btnname:'Sign In',
      username:null,
      password:null
    }
  },
  created(){
    if(localStorage.getItem('admin_staff') != null){

      this.signin = true

    }
  },
  methods:{
    ...mapActions(["login_admin"]),
      login(){

        this.login_error = null
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
    ...mapGetters(["success","errors"]),
    layout() {
      return `${this.$route.meta.layout || 'default'}-layout`;
    },
  },
  watch:{
    ...mapGetters(["success","errors"]),
    success(val){
        if(val === true){
            setTimeout(() => {
            
            //
            this.loader.hide()
            this.signin = true

          },1000)
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
      background: url(https://i.postimg.cc/Th8qkC7Y/New-Project-26.jpg)
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
      background: url(https://i.postimg.cc/Th8qkC7Y/New-Project-26.jpg)
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
