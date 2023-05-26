import React from 'react'
import InputNumber from './InputNumber'

export default {
  title: 'Inputs/Number',
  component: InputNumber,
  tags: ['autodocs'],
}

const Template = (args) => (
  <div>
    <InputNumber {...args} />
  </div>
)

export const AsInputNumber = Template.bind({})
AsInputNumber.args = {
  title: 'test',
  error: 'test error',
  value: '1',
  name: 'test',
  measureUnit: 'tests',
}
