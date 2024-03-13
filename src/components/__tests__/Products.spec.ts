import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import App from '../../App.vue'
import store from '@/store/store'

const storeConfig = {
  global: {
    plugins: [store]
  }
}

describe('App', () => {
  it('renders properly', () => {
    const wrapper = mount(App, storeConfig)
    expect(wrapper).toBeTruthy()
  })

  it('renders the correct heading', () => {
    const wrapper = mount(App, storeConfig)
    const heading = wrapper.find('h1').text()
    expect(heading).toEqual('Per product widgets')
  })
})
