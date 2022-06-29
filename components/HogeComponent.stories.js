import HogeComponent from './HogeComponent.vue'

export default {
  title: 'components/HogeComponent',
  component: HogeComponent,
  argTypes: {
    text: {
      description: 'タグテキスト',
      control: 'text',
      required: true,
    },
  },
}

const Template = (_args, { argTypes }) => ({
  components: { HogeComponent },
  props: Object.keys(argTypes),
  template: `<HogeComponent v-bind="$props" />`,
})

export const Primary = Template.bind({})
