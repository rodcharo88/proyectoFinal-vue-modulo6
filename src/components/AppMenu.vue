<template>

  <nav class="navbar navbar-expand-lg bg-light">

    <div class="container-fluid">
      <a class="navbar-brand" href="#">{{titulo}}</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="px-3">
            <router-link to="/" active-class="active"> Home </router-link>
          </li>
          <li class="px-3">
            <router-link to="/about" active-class="active"> About </router-link>
          </li>
          <li class="px-3">
            <router-link to="/catalogo" active-class="active"> Catálogo </router-link>
          </li>
          <li class="px-3">
            <router-link to="/productos" active-class="active"> Productos </router-link>
          </li>
          <li class="px-3">
            <router-link to="/filtro" active-class="active"> Filtro </router-link>
          </li>

        </ul>

      </div>
    </div>
  </nav>
  <!-- <app-alert></app-alert> -->
</template>

<script>
//import AppAlert from '@/components/AppAlert.vue';
export default {
  name: 'appMenu',
  data() {
    return {
      mode: null
    }
  },
  props: ["titulo"],
  methods: {
  },
  computed: {
  },
  mounted() {
    //this.mode = process.env.VUE_APP_MODE
  },
  components: {
    //AppAlert
  }
}
</script>

<style>
  .active {
    font-weight: bold;
    color: #3d8eeb;
  }

  .a {
    transition: all .3s ease-in;
  }

  a:hover {
    color: #3d8eeb;
  }
  
</style>