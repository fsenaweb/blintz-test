import { mount } from '@vue/test-utils'
import BoxForm from './index.vue'

describe('BoxForm', () => {
  const mountWrapper = () => {
    const wrapper = mount(BoxForm, {
      propsData: {
        flat: {
          active: true,
          address: 'Truman E Rd',
          city: 'Kansas City',
          image: 'https://placeimg.com/300/200/any',
          state: 'MO',
          zip: '33140',
        },
      },
    })
    return { wrapper }
  }

  it('is a Vue instance', () => {
    const { wrapper } = mountWrapper()
    expect(wrapper.vm).toBeTruthy()
  })

  it('should emmited value when change option filter select', async () => {
    const { wrapper } = mountWrapper()

    const options = await wrapper.find('.block-select').findAll('option')

    await options.at(1).setSelected()

    wrapper.vm.$emit('list-flats', 'valor')

    expect(wrapper.emitted()['list-flats']).toBeTruthy()
    expect(wrapper.emitted()['list-flats'].length).toBe(3)
  })
})
