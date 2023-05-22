import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Maze from '../../components/Maze/Maze'
import styles from './MazePage.module.css'

const MazePage = ({ width, height }) => {
  const [mazeLayout, setMazeLayout] = useState(null)
  const getMaze = async (w, h) => {
    const response = await fetch(`https://maze.uvgenios.online/?type=json&w=${w}&h=${h}`)
    setMazeLayout(await response.json())
  }

  useEffect(() => {
    getMaze(width, height)
  }, [])

  if (!mazeLayout) {
    return (
      <div className={styles.mazePageContainer}>
        Cargando...
      </div>
    )
  }

  return (
    <div className={styles.mazePageContainer}>
      <Maze json={mazeLayout} width={width} height={height} look="city" />
    </div>
  )
}

MazePage.propTypes = { width: PropTypes.number.isRequired, height: PropTypes.number.isRequired }

export default MazePage
