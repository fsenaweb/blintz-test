import { mount } from '@vue/test-utils'
import BoxFlat from '.'

describe('BoxFlat', () => {
  const mountWrapper = () => {
    const wrapper = mount(BoxFlat, {
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

  it('should show address information, when passed props', () => {
    const { wrapper } = mountWrapper()

    const textAddress = wrapper.find('h2')

    expect(textAddress.text()).toContain('Truman E Rd')
  })

  it('should have contain a image', () => {
    const { wrapper } = mountWrapper()

    const img = wrapper.find('img')

    expect(img.exists()).toBe(true)
  })

  it('should have contain 2 buttons', async () => {
    const { wrapper } = mountWrapper()

    const buttons = await wrapper.findAll('button')

    expect(buttons).toHaveLength(2)
  })
})
