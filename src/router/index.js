import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import DefaultHeader from '@/components/DefaultHeader.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    components: {
      header: DefaultHeader,
      default: Home
    }
  },
  {
    path: '/about',
    name: 'About',
    components: {
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
