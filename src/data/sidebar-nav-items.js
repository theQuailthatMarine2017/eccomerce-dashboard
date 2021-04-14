export default function () {
  return [{
    title: 'Dashboard',
    to: {
      name: 'blog-overview',
    },
    htmlBefore: '<i class="material-icons">edit</i>',
    htmlAfter: '',
  }, {
    title: 'Add New Client',
    htmlBefore: '<i class="material-icons">add_task</i>',
    to: {
      name: 'components-overview',
    },
  },{
    title: 'Add Staff / Admin',
    htmlBefore: '<i class="material-icons">add_task</i>',
    to: {
      name: 'add-staff-admin',
    },
  },{
    title: 'Manage Orders',
    htmlBefore: '<i class="material-icons">inventory</i>',
    to: {
      name: 'blog-posts',
    },
  },{
    title: 'Manage Appointments',
    htmlBefore: '<i class="material-icons">inventory</i>',
    to: {
      name: 'appointments',
    },
  },{
    title: 'Manage Clients',
    htmlBefore: '<i class="material-icons">inventory</i>',
    to: {
      name: 'add-new-post',
    },
  },{
    title: 'Manage Staff / Admin',
    htmlBefore: '<i class="material-icons">inventory</i>',
    to: {
      name: 'staff-admin',
    },
  },
  {
    title: 'Mass Messaging',
    htmlBefore: '<i class="material-icons">message</i>',
    to: {
      name: 'Messaging',
    },
  },
  {
    title: 'Client Rewards',
    htmlBefore: '<i class="material-icons">emoji_events</i>',
    to: {
      name: 'Rewards',
    },
  },
  {
    title: 'My Account',
    htmlBefore: '<i class="material-icons">emoji_events</i>',
    to: {
      name: 'my-account',
    },
  }];
}
