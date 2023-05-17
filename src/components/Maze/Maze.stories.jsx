import React from 'react'
import Maze from './Maze'

export default {
  title: 'Sprites/Maze',
  component: Maze,
  tags: ['autodocs'],
}

const Template = (args) => (
  <div>
    <Maze {...args} />
  </div>
)

export const As2x2 = Template.bind({})
As2x2.args = {
  json: [['+', '-', '-', '+', '-', '-', '+'], ['|', 'p', ' ', '|', ' ', ' ', '|'], ['+', ' ', ' ', '+', ' ', ' ', '+'], ['|', ' ', ' ', ' ', ' ', 'g', '|'], ['+', '-', '-', '+', '-', '-', '+']],
  width: 2,
  height: 2,
}

export const As4x4 = Template.bind({})
As4x4.args = {
  json: [['+', '-', '-', '+', '-', '-', '+', '-', '-', '+', '-', '-', '+'], ['|', 'p', ' ', ' ', ' ', ' ', '|', ' ', ' ', ' ', ' ', ' ', '|'], ['+', ' ', ' ', '+', ' ', ' ', '+', ' ', ' ', '+', ' ', ' ', '+'], ['|', ' ', ' ', '|', ' ', ' ', ' ', ' ', ' ', '|', ' ', ' ', '|'], ['+', ' ', ' ', '+', '-', '-', '+', '-', '-', '+', ' ', ' ', '+'], ['|', ' ', ' ', '|', ' ', ' ', ' ', ' ', ' ', '|', ' ', ' ', '|'], ['+', ' ', ' ', '+', '-', '-', '+', ' ', ' ', '+', ' ', ' ', '+'], ['|', ' ', ' ', ' ', ' ', ' ', '|', ' ', ' ', ' ', ' ', 'g', '|'], ['+', '-', '-', '+', '-', '-', '+', '-', '-', '+', '-', '-', '+']],
  width: 4,
  height: 4,
}