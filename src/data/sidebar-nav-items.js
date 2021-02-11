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
    htmlBefore: '<i class="material-icons">inventory</i>',
    to: {
      name: 'blog-posts',
    },
  },{
    title: 'Add New Product',
    htmlBefore: '<i class="material-icons">add_task</i>',
    to: {
      name: 'components-overview',
    },
  }, {
    title: 'Manage Products',
    htmlBefore: '<i class="material-icons">inventory</i>',
    to: {
      name: 'add-new-post',
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
  }];
}
