import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import styles from './GameOverPage.module.css'

const GameOverPage = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { win } = location.state
  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/')
  }

  return (
    <div className={styles.mainContainer}>
      {win && (
        <>
          <h1 className={styles.title}>¡Victoria!</h1>
          <h2>¿Otra ronda?</h2>
        </>
      )}
      {!win && (
        <>
          <h1 className={styles.title}>¡Se acabó el tiempo!</h1>
          <h2>Suerte para la próxima</h2>
        </>
      )}
      <button className={styles.submitButton} aria-label="Send" type="submit" onClick={handleSubmit}>Regresar al menú</button>
    </div>
  )
}

export default GameOverPage
