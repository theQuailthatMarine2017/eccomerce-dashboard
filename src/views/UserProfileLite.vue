<template>
  <d-container fluid class="main-content-container px-4">
    <!-- Page Header -->
    <d-row no-gutters class="page-header py-4">
      <d-col col sm="4" class="text-center text-sm-left mb-4 mb-sm-0">
        <h3 class="page-title">Add New Admin</h3>
      </d-col>
    </d-row>

    <!-- Content -->
    <d-row>
      <d-col lg="12">
        <d-form>

              <d-form-row>

                <!-- Email -->
                <d-col md="6" class="form-group">
                  <label for="feEmail">Username</label>
                  <d-form-input id="feEmail" value="sierra@example.com" />
                </d-col>

                <!-- Password -->
                <d-col md="6" class="form-group">
                  <label for="fePassword">Password</label>
                  <d-form-input type="password" id="fePassword" placeholder="Last Name" value="EX@MPL#P@$$w0RD" />
                </d-col>

              </d-form-row>

              <d-button type="submit" class="btn-accent">Add Admin</d-button>

            </d-form>
      </d-col>
    </d-row>
  </d-container>
</template>

<script>
import UserDetails from '@/components/user-profile-lite/UserDetails.vue';
import UserAccountDetails from '@/components/user-profile-lite/UserAccountDetails.vue';

export default {
  name: 'user-profile-lite',
  components: {
    uplUserDetails: UserDetails,
    uplUserAccountDetails: UserAccountDetails,
  },
};
</script>

