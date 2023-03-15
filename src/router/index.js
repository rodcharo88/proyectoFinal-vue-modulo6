import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/catalogo',
    name: 'catalogo',
    component: () => import(/* webpackChunkName: "catalogo" */ '../views/CatalogoView.vue')
  },
  {
    path: '/catalogo/:id',
    name: 'verCatalogo',
    component: () => import(/* webpackChunkName: "verCatalogo" */ '../views/VerCatalogoView.vue')
  },
  {
    path: '/productos',
    name: 'productos',
    component: () => import(/* webpackChunkName: "productos" */ '../views/ProductoView.vue')
  },
  {
    path: '/productos/:id',
    name: 'verProducto',
    component: () => import(/* webpackChunkName: "verProducto" */ '../views/VerProductoView.vue')
  },
  {
    path: '/productos/:id/editar',
    name: 'editarProducto',
    component: () => import(/* webpackChunkName: "verProducto" */ '../views/EditarProductoView.vue')
  },
  {
    path: '/filtro',
    name: 'filtro',
    component: () => import(/* webpackChunkName: "filtroProductos" */ '../views/FiltroProductosView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
