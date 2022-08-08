import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Categories from '@/views/Categories.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import Detail from '@/views/Detail.vue'
import History from '@/views/History.vue'
import Planning from '@/views/Planning.vue'
import Profile from '@/views/Profile.vue'
import Record from '@/views/Record.vue'



const routes = [
  {
    path: '/',
    name: 'home',
    meta: { layout: 'main' },
    component: Home
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
  {
    path: '/register',
    name: 'register',
    meta: { layout: 'empty' },
    component: Register,
  },
  {
    path: '/detail/:id',
    name: 'detail',
    meta: { layout: 'main' },
    component: Detail,
  },
  {
    path: '/history',
    name: 'history',
    meta: { layout: 'main' },
    component: History
  },
  {
    path: '/planning',
    name: 'planning',
    meta: { layout: 'main' },
    component: Planning
  },
  {
    path: '/profile',
    name: 'profile',
    meta: { layout: 'main' },
    component: Profile
  },
  {
    path: '/record',
    name: 'record',
    meta: { layout: 'main' },
    component: Record
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
