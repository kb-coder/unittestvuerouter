import { mount } from '@vue/test-utils'
import DefaultHeader from '@/components/DefaultHeader.vue'
import mergeWith from 'lodash.mergewith'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: DefaultHeader
    },
    {
      path: '/About',
      name: 'About',
      component: '<template>about page</template>'
    }
  ]
})

const createWrapper = (overrides) => {
  const defaultMountingOptions = {
    global: {
      plugins: [router]
    }
  }

  return mount(
    DefaultHeader,
    mergeWith(
      defaultMountingOptions,
      overrides
    )
  )
}

describe('default-header', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('wires up router', async () => {
    router.push('/')
    await router.isReady()
    const wrapper = await createWrapper()

    expect(wrapper.vm.allRoutes.length).toBe(2)
  })
})
