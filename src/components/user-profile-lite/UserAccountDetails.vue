<template>
  <d-card class="card-small mb-4">

    <!-- Card Header -->
    <d-card-header class="border-bottom">
      <h6 class="m-0">{{ title }}</h6>
    </d-card-header>

    <d-list-group flush>
      <d-list-group-item class="p-3">
        <d-row>
          <d-col>
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

              <d-button type="submit" class="btn-accent">Complete</d-button>

            </d-form>
          </d-col>
        </d-row>
      </d-list-group-item>
    </d-list-group>
  </d-card>
</template>

<script>
export default {
  name: 'user-account-details',
  props: {
    /**
     * The component title.
     */
    title: {
      type: String,
      default: 'Your Account Details',
    },
  },
};
</script>
