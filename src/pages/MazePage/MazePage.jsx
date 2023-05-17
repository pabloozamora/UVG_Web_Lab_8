import React, { useState, useEffect } from 'react'
import Maze from '../../components/Maze/Maze'
import styles from './MazePage.module.css'

const MazePage = () => {
  const [mazeLayout, setMazeLayout] = useState(null)
  const getMaze = async (width, height) => {
    const response = await fetch(`https://maze.uvgenios.online/?type=json&w=${width}&h=${height}`)
    setMazeLayout(await response.json())
  }

  useEffect(() => {
    getMaze(3, 3)
  }, [])

  if (!mazeLayout) {
    return (
      <div className={styles.mazePageContainer}>
        Loading...
      </div>
    )
  }

  return (
    <div className={styles.mazePageContainer}>
      <Maze json={mazeLayout} width={3} height={3} />
    </div>
  )
}

export default MazePage