import React from 'react'
import InputSelect from './InputSelect'

export default {
  title: 'Inputs/Select',
  component: InputSelect,
  tags: ['autodocs'],
}

const Template = (args) => (
  <div>
    <InputSelect {...args} />
  </div>
)

export const AsInputSelect = Template.bind({})
AsInputSelect.args = {
  title: 'test',
  error: 'test error',
  name: 'test',
  options: [{ title: 'test1', value: 'test1' }, { title: 'test2', value: 'test2' }],
}
