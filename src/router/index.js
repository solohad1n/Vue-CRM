import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Categories from '../views/Categories.vue'
import Login from '../views/Login.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/categories',
    name: 'Categories',
    meta: { layout: 'main' },
    component: Categories
  },
  {
    path: '/login',
    name: 'Login',
    meta: { layout: 'empty' },
    component: Login
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
