export default function () {
  return [{
    title: 'Dashboard',
    to: {
      name: 'blog-overview',
    },
    htmlBefore: '<i class="material-icons">edit</i>',
    htmlAfter: '',
  }, {
    title: 'Manage Orders',
    htmlBefore: '<i class="material-icons">vertical_split</i>',
    to: {
      name: 'blog-posts',
    },
  }, {
    title: 'Manage Products',
    htmlBefore: '<i class="material-icons">note_add</i>',
    to: {
      name: 'add-new-post',
    },
  }, {
    title: 'Add New Product',
    htmlBefore: '<i class="material-icons">view_module</i>',
    to: {
      name: 'components-overview',
    },
  }, {
    title: 'Add Deliver Rider',
    htmlBefore: '<i class="material-icons">person</i>',
    to: {
      name: 'add-rider',
    },
  }, {
    title: 'Manage Deliver Rider',
    htmlBefore: '<i class="material-icons">person</i>',
    to: {
      name: 'manage-deliver-rider',
    },
  }, {
    title: 'Manage Account',
    htmlBefore: '<i class="material-icons">table_chart</i>',
    to: {
      name: 'tables',
    },
  }, {
    title: 'Add New Admin',
    htmlBefore: '<i class="material-icons">person</i>',
    to: {
      name: 'user-profile-lite',
    },
  }, {
    title: 'Manage Admins',
    htmlBefore: '<i class="material-icons">error</i>',
    to: {
      name: 'errors',
    },
  }];
}
