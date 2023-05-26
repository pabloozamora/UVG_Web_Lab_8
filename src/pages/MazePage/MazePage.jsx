import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Maze from '../../components/Maze/Maze'
import styles from './MazePage.module.css'
import loader from '../../assets/loader.svg'

const MazePage = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [mazeLayout, setMazeLayout] = useState(null)
  const [time, setTime] = useState(location.state.time)
  const getMaze = async (w, h) => {
    const response = await fetch(`https://maze.uvgenios.online/?type=json&w=${w}&h=${h}`)
    setMazeLayout(await response.json())
  }

  const finish = (value) => {
    navigate('/GameOverPage', { state: { win: value } })
  }

  useEffect(() => {
    if (location.state.timer && time > 0) {
      setTimeout(() => {
        setTime((oldTime) => (oldTime - 1))
      }, 1000)
    } else if (location.state.timer && time <= 0) {
      navigate('/GameOverPage', { state: { win: false } })
    }
  }, [time])

  useEffect(() => {
    getMaze(location.state.width, location.state.height)
  }, [])

  if (!mazeLayout) {
    return (
      <div className={styles.mazePageContainer}>
        <img alt="Cargando" src={loader} />
        <p className={styles.loading}>Cargando</p>
      </div>
    )
  }

  return (
    <div className={styles.mazePageContainer}>
      {location.state.timer && (
        <div className={styles.timerContainer}>
          <div className={styles.timer}>
            Tiempo restante
            <br />
            {new Date(time * 1000).toISOString().slice(14, 19)}
          </div>
        </div>
      )}
      <Maze
        json={mazeLayout}
        width={location.state.width}
        height={location.state.height}
        look={location.state.look}
        character={location.state.character}
        finish={finish}
      />
    </div>
  )
}

export default MazePage
