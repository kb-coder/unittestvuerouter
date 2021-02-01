<template>
  <div
    v-for="nav in allRoutes"
    :key="nav.name"
    >
    <router-link
      :to="nav.path"
      :class="isCurrentRoute(nav) ? 'highlighted' : ''"
    >
      <span>{{nav.name}}</span>
    </router-link>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { useRouter, useRoute } from 'vue-router'

export default defineComponent({
  name: 'DefaultHeader',
  setup () {
    const router = useRouter()
    const currentRoute = useRoute()
    const allRoutes = router.getRoutes()

    const isCurrentRoute = (route) => {
      return currentRoute.name === route.name
    }

    return {
      isCurrentRoute,
      allRoutes
    }
  }
})
</script>

<style scoped>
  .highlighted {
    background-color: navy;
    opacity: 0.5;
    color: white !important;
  }
</style>
