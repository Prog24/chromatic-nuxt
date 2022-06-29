import SampleComponent from './SampleComponent.vue'

export default {
  title: 'components/SampleComponent',
  component: SampleComponent,
}

const Template = () => ({
  components: { SampleComponent },
  template: `<SampleComponent />`,
})

export const Primary = Template.bind({})
