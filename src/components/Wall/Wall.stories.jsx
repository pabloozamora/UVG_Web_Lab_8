import React from 'react'
import Wall from './Wall'

export default {
  title: 'Sprites/Wall',
  component: Wall,
  tags: ['autodocs'],
}

const Template = (args) => (
  <div>
    <Wall {...args} />
  </div>
)

export const AsWall = Template.bind({})
AsWall.args = {
  type: '+',
  look: 'city',
}
