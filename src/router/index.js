import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import DefaultHeader from '@/components/DefaultHeader'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: {
      header: DefaultHeader,
      default: Home
    }
  },
  {
    path: '/about',
    name: 'About',
    component: {
      header: DefaultHeader,
      default: About
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
