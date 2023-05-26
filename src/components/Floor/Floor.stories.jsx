import React from 'react'
import Floor from './Floor'

export default {
  title: 'Sprites/Floor',
  component: Floor,
  tags: ['autodocs'],
}

const Template = (args) => (
  <div>
    <Floor {...args} />
  </div>
)

export const AsFloor = Template.bind({})
AsFloor.args = {
  look: 'city',
}
