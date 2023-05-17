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

export const AsCWall = Template.bind({})
AsCWall.args = {
  type: '+',
}

export const AsVWall = Template.bind({})
AsVWall.args = {
  type: '|',
}

export const AsHWall = Template.bind({})
AsHWall.args = {
  type: '-',
}
