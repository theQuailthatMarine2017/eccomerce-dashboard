import Vue from 'vue';
import Router from 'vue-router';

import PersonalBlog from './views/PersonalBlog.vue';
import UserProfileLite from './views/UserProfileLite.vue';
import AddNewPost from './views/AddNewPost.vue';
import Errors from './views/Errors.vue';
import ComponentsOverview from './views/ComponentsOverview.vue';
import Tables from './views/Tables.vue';
import BlogPosts from './views/BlogPosts.vue';
import ManageDeliveryRider from './views/ManageRiders.vue';
import AddStaffAdmin from './views/AddStaffAdmin.vue';
import Manage from './views/ManageAppointments.vue';
import Messaging from './views/Messaging.vue';
import ManageStaff from './views/ManageStaff.vue';
import ManageClient from './views/ManageClient.vue';
import ManageAccount from './views/ManageAccount.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  
  routes: [
    {
      path: '/',
      redirect: '/blog-overview',
    },
    {
      path:'/manage-appointments',
      name:'appointments',
      component: Manage,
    },
    {
      path:'/my-account',
      name:'my-account',
      component: ManageAccount,
    },
    {
      path:'/add-staff-admin',
      name:'add-staff-admin',
      component: AddStaffAdmin,
    },
    {
      path:'/manage-staff',
      name:'staff-admin',
      component: ManageStaff,
    },
    {
      path:'/mass-messaging',
      name:'Messaging',
      component: Messaging,
    },
    {
      path:'/client-rewards',
      name:'Rewards',
      component: ManageDeliveryRider,
    },
    {
      path: '/blog-overview',
      name: 'blog-overview',
      component: PersonalBlog,
    },
    {
      path: '/user-profile-lite',
      name: 'user-profile-lite',
      component: UserProfileLite,
    },
    {
      path: '/manage-deliver-rider',
      name: 'manage-deliver-rider',
      component: ManageDeliveryRider,
    },
    {
      path:'/manage-client',
      name:'manage-client',
      component:ManageClient
    },
    {
      path: '/manage-deliver-rider',
      name: 'manage-deliver-rider',
      component: ManageDeliveryRider,
    },
    {
      path: '/add-new-post/',
      name: 'add-new-post',
      component: AddNewPost,
    },
    {
      path: '/errors',
      name: 'errors',
      component: Errors,
    },
    {
      path: '/components-overview',
      name: 'components-overview',
      component: ComponentsOverview,
    },
    {
      path: '/tables',
      name: 'tables',
      component: Tables,
    },
    {
      path: '/blog-posts',
      name: 'blog-posts',
      component: BlogPosts,
    }
  ],
});
