<template>
  <div>
    <!-- <d-alert class="alert-royal-blue" show>
      <i class="fa fa-info mx-2"></i>
      <strong>How you doin'?</strong> I'm just a friendly, good-looking notification message and I come in all the colors you can see below. Pretty cool, huh?
    </d-alert> -->

    <d-container fluid class="main-content-container px-4">

      <!-- Page Header -->
      <!-- <d-row no-gutters class="page-header py-2 pb-4 mb-3 border-bottom">
        <d-col col sm="4" class="text-center text-sm-left mb-4 mb-sm-0"> -->
          <!-- <span class="text-uppercase page-subtitle">Overview</span> -->
          <!-- <h3 class="page-title">Add New Cake</h3>
        </d-col>
      </d-row> -->


      <!-- Colors -->

      <d-row style="margin-top:15px;">
        <d-col lg="12" class="mb-4">
          <d-card class="card-small">

            <!-- Form Example -->
            <d-card-header class="border-bottom">
              <h6 class="m-0">Add New Cake</h6>
            </d-card-header>

            <d-list-group flush>
              <d-list-group-item class="p-3">
                <d-row>
                  <d-col>
                    <d-form>
                      <!-- <d-form-row>
                        <d-col md="6" class="form-group">
                          <label for="feEmailAddress">Email</label>
                          <d-input id="feEmailAddress" type="email" placeholder="Email" />
                        </d-col>
                        <d-col md="6">
                          <label for="fePassword">Password</label>
                          <d-input id="fePassword" type="password" placeholder="Password" />
                        </d-col>
                      </d-form-row> -->

                      <div class="form-group">
                        <label for="feInputAddress">Cake Name</label>
                        <d-input id="feInputAddress" />
                      </div>

                      <div class="form-group">
                        <label for="feInputAddress2">Description</label>
                        <d-input id="feInputAddress2" />
                      </div>

                      <div class="form-group">
                        <label for="feInputAddress2">Cost</label>
                        <d-input id="feInputAddress2" />
                      </div>

                      <!-- Custom File Upload -->
                  <strong class="text-muted d-block mb-2">Upload Photo</strong>
                  <div class="custom-file mb-3">
                    <input type="file" class="custom-file-input" id="customFile2" />
                    <label class="custom-file-label" for="customFile2">Choose file...</label>
                  </div>

                      <!-- <d-form-row>
                        <d-col md="6" class="form-group">
                          <label for="feInputCity">City</label>
                          <d-input id="feInputCity" />
                        </d-col>
                        <d-col md="4" class="form-group">
                          <label for="feInputState">State</label>
                          <d-select id="feInputState">
                            <option>Choose...</option>
                            <option>...</option>
                          </d-select>
                        </d-col>
                        <d-col md="2" class="form-group">
                          <label for="feInputZip">Zip</label>
                          <d-input id="feInputZip" />
                        </d-col>
                      
                      </d-form-row> -->
                      <d-button type="submit">Add New Cake</d-button>
                    </d-form>
                  </d-col>
                </d-row>
              </d-list-group-item>
            </d-list-group>

          </d-card>
        </d-col>
      </d-row>
    </d-container>
  </div>
</template>
