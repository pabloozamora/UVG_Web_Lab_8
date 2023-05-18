import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types'
import Player from '../Player/Player';
import Goal from '../Goal/Goal';
import Wall from '../Wall/Wall'
import Floor from '../Floor/Floor';
import styles from './Maze.module.css'

const Maze = ({ json, width, height }) => {
  const availableSpaces = ['2,2']
  let winSpace = ''
  const [position, setPosition] = useState({ row: 2, column: 2 })
  const [win, setWin] = useState(false)
  const handleKeyPressed = (e) => {
    if (!win && e.key === 'ArrowDown') {
      // Cambiar sprite abajo
      if (availableSpaces.includes(`${position.row + 1},${position.column}`)) {
        setPosition((lastPosition) => ({ ...lastPosition, row: lastPosition.row + 1 }))
      }
    } else if (!win && e.key === 'ArrowUp') {
      // Cambiar sprite arriba
      if (availableSpaces.includes(`${position.row - 1},${position.column}`)) {
        setPosition((lastPosition) => ({ ...lastPosition, row: lastPosition.row - 1 }))
      }
    } else if (!win && e.key === 'ArrowRight') {
      // Cambiar sprite derecha
      if (availableSpaces.includes(`${position.row},${position.column + 1}`)) {
        setPosition((lastPosition) => ({ ...lastPosition, column: lastPosition.column + 1 }))
      }
    } else if (!win && e.key === 'ArrowLeft') {
      // Cambiar sprite izquierda
      if (availableSpaces.includes(`${position.row},${position.column - 1}`)) {
        setPosition((lastPosition) => ({ ...lastPosition, column: lastPosition.column - 1 }))
      }
    }
  }

  useEffect(() => {
    if (`${position.row},${position.column}` === winSpace) {
      setWin(() => true)
      setTimeout(() => alert('YAAAY'), 500)
    }
  }, [position])

  return (
    <div
      className={styles.mazeContainer}
      style={{
        gridTemplateColumns: `repeat(${width * 2 + width + 1}, 50px)`,
        gridTemplateRows: `repeat(${height * 2 + 1}, 50px)`,
      }}
    >
      {json.map((row, indexRow) => row.map((col, indexCol) => {
        switch (col) {
          case 'p':
            return (
              <>
                <Player handleKeyPressed={handleKeyPressed} position={position} />
                <Floor />
              </>
            )
          case 'g':
            availableSpaces.push(`${indexRow + 1},${indexCol + 1}`)
            winSpace = `${indexRow + 1},${indexCol + 1}`
            return <Goal />
          case '|':
            return <Wall type="|" />
          case '-':
            return <Wall type="-" />
          case '+':
            return <Wall type="+" />
          case ' ':
            availableSpaces.push(`${indexRow + 1},${indexCol + 1}`)
            return <Floor />
          default:
            return null
        }
      }))}
    </div>
  )
}

Maze.propTypes = {
  json: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
}

export default Maze
