<template>
  <d-container fluid class="main-content-container px-4">
    <!-- Page Header -->
    <d-row no-gutters class="page-header py-4">
      <d-col col sm="4" class="text-center text-sm-left mb-4 mb-sm-0">
        <span class="text-uppercase page-subtitle">Dashboard</span>
        <h3 class="page-title">Business Name</h3>
      </d-col>
    </d-row>

    <!-- Small Stats Blocks -->
    <d-row>
      <d-col sm="12" md="6" lg="6" v-for="(stats, idx) in smallStats" :key="idx" class="mb-4">
        <small-stats :id="`small-stats-${idx}`" variation="1" :chart-data="stats.datasets" :label="stats.label" :value="stats.value"/>
      </d-col>
    </d-row>

    

    <d-row>
      <!-- Users Overview -->
      <d-col lg="12" md="12" sm="12" class="mb-4">
        <bo-users-overview />
      </d-col>

      <!-- Users by Device (lite) -->
      <!-- <d-col lg="4" md="6" sm="12" class="mb-4">
        <bo-users-by-device />
      </d-col> -->

    </d-row>

    <modal name="my-first-modal">
        This is my first modal
    </modal>

    <!-- <d-row>
      <!-- New Draft -->
      <!-- <d-col lg="4" md="6" sm="12" class="mb-4">
        <bo-new-draft />
      </d-col> -->

      <!-- Discussions -->
      <!-- <d-col lg="5" md="12" sm="12" class="mb-4">
        <bo-discussions @approve="handleApprove" @reject="handleReject" @edit="handleEdit" @view-all-comments="handleViewAllComments" />
      </d-col> -->

      <!-- Top Referrals -->
      <!-- <d-col lg="3" md="12" sm="12" class="mb-4">
        <bo-top-referrals />
      </d-col> -->
    <!-- </d-row> -->
  </d-container>
</template>

<script>
import SmallStats from '@/components/common/SmallStats.vue';
import TopReferrals from '@/components/common/TopReferrals.vue';
import UsersOverview from '@/components/blog/UsersOverview.vue';
import UsersByDevice from '@/components/blog/UsersByDeviceLite.vue';
import NewDraft from '@/components/blog/NewDraft.vue';
import Discussions from '@/components/blog/Discussions.vue';
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    SmallStats,
    boUsersOverview: UsersOverview,
    boUsersByDevice: UsersByDevice,
    boNewDraft: NewDraft,
    boDiscussions: Discussions,
    boTopReferrals: TopReferrals,
  },
  data() {
    return {
      dateRange: {
        from: null,
        to: null,
      },
      columns: [{
        key: "_id",
        label: "ID",
        sortable: true,
        type: "number",
        display: true
      },]
    };
  },
  created(){

    this.get_orders()

  },
  mounted(){

    this.get_orders()

  },
  methods: {
    ...mapActions(["get_orders","get_sales"]),
    handleApprove(id) {
      alert(`Approving discussion id: ${id}`); // eslint-disable-line no-alert
    },
    handleReject(id) {
      alert(`Rejecting discussion id: ${id}`); // eslint-disable-line no-alert
    },
    handleEdit(id) {
      alert(`Editing discussion id: ${id}`); // eslint-disable-line no-alert
    },
    handleViewAllComments() {
      alert('Viewing all comments!'); // eslint-disable-line no-alert
    },
  },
  computed: {
    ...mapGetters(["orders","sales"]),
    smallStats() {
      return [
      {
        label: 'Completed Orders',
        value: '12',
      },  
      {
        label: 'Total Sales',
        value: 28500,
      }];
    },
    watch: {

    }
  },
};
</script>

