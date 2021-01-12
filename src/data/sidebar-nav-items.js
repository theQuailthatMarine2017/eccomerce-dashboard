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
  },{
    title: 'Add New Product',
    htmlBefore: '<i class="material-icons">view_module</i>',
    to: {
      name: 'components-overview',
    },
  }, {
    title: 'Manage Products',
    htmlBefore: '<i class="material-icons">note_add</i>',
    to: {
      name: 'add-new-post',
    },
  }];
}
