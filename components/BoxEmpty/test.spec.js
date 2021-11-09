import { mount } from '@vue/test-utils'
import BoxEmpty from './index.vue'

describe('BoxEmpty', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(BoxEmpty)
    expect(wrapper.vm).toBeTruthy()
  })
})
