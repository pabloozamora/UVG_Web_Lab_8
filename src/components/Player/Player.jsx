import React from 'react'
import styles from './Player.module.css'

const Player = () => {
  const move = (e) => {
    // eslint-disable-next-line no-console
    console.log('Se deberia mover: ', e.key)
  }
  return (
    /* eslint-disable-next-line jsx-a11y/no-static-element-interactions,
    jsx-a11y/no-noninteractive-tabindex, 
    jsx-a11y/no-autofocus */
    <div className={styles.Player} tabIndex={0} onKeyDown={move} autoFocus />
  )
}

export default Player
