import BoxFlat from '.'

export default {
  title: 'BoxFlat',
}

const Template = (args, { argTypes }) => ({
  components: { BoxFlat },
  props: Object.keys(argTypes),
  template: '<box-flat v-bind="$props" />',
})

export const Default = Template.bind({})

Default.args = {
  flat: {
    active: true,
    address: 'Truman E Rd',
    city: 'Kansas City',
    image: 'https://placeimg.com/300/200/any',
    state: 'MO',
    zip: '33140',
  },
}
