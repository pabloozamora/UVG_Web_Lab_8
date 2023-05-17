import React from 'react'
import Goal from './Goal'

export default {
  title: 'Sprites/Goal',
  component: Goal,
  tags: ['autodocs'],
}

const Template = (args) => (
  <div>
    <Goal {...args} />
  </div>
)

export const AsPlayer = Template.bind({})
AsPlayer.args = {
  letter: 'g',
}
