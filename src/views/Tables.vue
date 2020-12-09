<template>
  <div class="main-content-container container-fluid px-4">
    <!-- Page Header -->
    <div class="page-header row no-gutters py-4">
      <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
        <h3 class="page-title">Manage Profile</h3>
      </div>
    </div>

    <!-- Default Light Table -->
    <div class="row">
      <div class="col">
         <upl-user-account-details />
      </div>
    </div>

    <!-- Default Dark Table -->
  </div>
</template>

<script>
import UserDetails from '@/components/user-profile-lite/UserDetails.vue';
import UserAccountDetails from '@/components/user-profile-lite/UserAccountDetails.vue';

export default {
  components: {
    uplUserDetails: UserDetails,
    uplUserAccountDetails: UserAccountDetails,
  },
  
}
</script>
