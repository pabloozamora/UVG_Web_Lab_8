import React from 'react';
import PropTypes from 'prop-types'
import Player from '../Player/Player';
import Goal from '../Goal/Goal';
import Wall from '../Wall/Wall'
import Floor from '../Floor/Floor';
import styles from './Maze.module.css'

const Maze = ({ json, width, height }) => (
  <div
    className={styles.mazeContainer}
    style={{
      gridTemplateColumns: `repeat(${width * 2 + width + 1}, 50px)`,
      gridTemplateRows: `repeat(${height * 2 + 1}, 50px)`,
    }}
  >
    {json.map((row) => row.map((col) => {
      switch (col) {
        case 'p':
          return <Player />
        case 'g':
          return <Goal />
        case '|':
          return <Wall type="|" />
        case '-':
          return <Wall type="-" />
        case '+':
          return <Wall type="+" />
        case ' ':
          return <Floor />
        default:
          return null
      }
    }))}
  </div>
)

Maze.propTypes = {
  json: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
}

export default Maze
