<template>
  <footer class="main-footer d-flex p-2 px-3 bg-white border-top">
    <div :class="[contained ? 'container' : 'container-fluid']">
      <p>Ununuzi Web System 2021. <a href="https://thecodingguy.co.ke"><span class="copyright ml-auto my-auto mr-2">Developed and Maintained by @theCodingGuy</span></a></p>
      
    </div>
  </footer>
</template>

<script>
const defaultMenuItems = [{
  title: 'Home',
  to: '#',
}, {
  title: 'Services',
  to: '#',
}, {
  title: 'About',
  to: '#',
}, {
  title: 'Products',
  to: '#',
}, {
  title: 'Blog',
  to: '#',
}];

export default {
  name: 'main-footer',
  props: {
    /**
       * The footer menu items.
       */
    menuItems: {
      type: Array,
      default() {
        return defaultMenuItems;
      },
    },
    /**
       * The copyright information.
       */
    copyright: {
      type: String,
      default: 'Copyright © 2018 Quail',
    },
    /**
       * Whether the footer should be wrapped in a container, or not.
       */
    contained: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
