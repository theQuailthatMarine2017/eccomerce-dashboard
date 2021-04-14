<template>
    <d-container fluid class="main-content-container px-4 pb-4">

        <d-row style="margin-top:15px;" >
        <d-col lg="12" class="mb-4">
          <d-card ref="menu_form" class="card-small" style="background-color:#0386ac;">

            <!-- Form Example -->
            <d-card-header style="background-color:#0386ac;">
              <h5 class="m-0" style="color:white;"><i class="fa fa-user mr-1"></i>Your Account</h5>
            </d-card-header>
      <img width="105" height="105" style="margin-left:28px;" :src="user.img">

            <d-row style="margin:15px;color:white;">
                  <d-col lg="6" ref="products">
                      <p>Full Names: {{ user.fullnames }}</p>
                      <p>Email: {{ user.email }}</p>
                      <p>Mobile: {{ user.mobile }}</p>
                      <p>National ID: {{ user.national_id }}</p>
                      <p>KRA Pin: {{ user.kra }}</p>
                  </d-col>

                  <d-col lg="6" ref="products">
                      <p>Bank Name: {{ user.bankName }}</p>
                      <p>Bank Branch: {{ user.bankBranch }}</p>
                      <p>Bank Account No.: {{ user.bankAcc }}</p>
                      <p>Account Type: {{ user.type }}</p>
                      <p>Department: {{ user.department }}</p>
                  </d-col>
            </d-row>

            <div style="margin-left:28px;">
              <h5 class="m-0" style="color:white">Change Password</h5>
            </div>

             <d-row style="margin:15px;color:white;">
                  <d-col lg="6" ref="products">
                      <div class="form-group">
                        <label >Enter Current Password</label>
                        <d-input  placeholder="Enter Current Password"  />
                      </div>
                      
                  </d-col>

                  <d-col lg="6" ref="products">
                      <div class="form-group">
                        <label >Enter New Password</label>
                        <d-input  placeholder="Enter New Password"  />
                      </div>
                      
                  </d-col>
            </d-row>

          </d-card>


      </d-col>

    </d-row>

    </d-container>
</template>

<script>
export default {
    data(){
        return{
            user:null,
            newpass:null,
            denied:true
        }
    },
    created(){
        
        if(localStorage != null){

            this.denied = false
            this.user = JSON.parse(localStorage.getItem('account'))
            console.log("user " + this.user.fullnames)
        }
    },
    methods:{
        changePassword(password){

        }
    }
}
</script>

<style scoped>

</style>