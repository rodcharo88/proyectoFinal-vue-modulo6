<template>
  <app-menu titulo="FARMAPROV"></app-menu>
  <router-view/>
</template>
<script>
import AppMenu from '@/components/AppMenu.vue';
export default {
  name: 'app',
  data() {
    return {
    }
  },
  methods: {
  },
  computed: {
  },
  mounted() {
  },
  components: {
    AppMenu
  }
}
</script>
<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  nav {
    padding: 30px;
  }

  nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  nav a.router-link-exact-active {
    color: #3d8eeb;
  }

  h1 {
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  }
  .thead-light {

    color: darkkhaki;
  }
  .nav-link1 {

    color: blue;
  }
  .nav-link2 {
    color:red;

  }
</style>
