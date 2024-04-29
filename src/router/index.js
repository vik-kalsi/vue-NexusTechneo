import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductsView from '../views/ProductsView.vue'
import GetStarted from '../views/GetStarted.vue'
import NotFound from '../views/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/products',
      name: 'products',
      component: ProductsView
    },
    {
      path: '/getstarted',
      name: 'getstarted',
      component: GetStarted
    },
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: NotFound
    },
  ]
})

export default router
