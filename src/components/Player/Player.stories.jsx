import React from 'react'
import Player from './Player'

export default {
  title: 'Sprites/Player',
  component: Player,
  tags: ['autodocs'],
}

const Template = (args) => (
  <div>
    <Player {...args} />
  </div>
)

export const AsPlayer = Template.bind({})
AsPlayer.args = {
  letter: 'p',
}
