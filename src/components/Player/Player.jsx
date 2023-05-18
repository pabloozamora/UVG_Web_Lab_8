import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import styles from './Player.module.css'
import samuraiFront from '../../assets/SamuraiFront.svg'
import samuraiBack from '../../assets/SamuraiBack.svg'
import samuraiRight from '../../assets/SamuraiRight.svg'
import samuraiLeft from '../../assets/SamuraiLeft.svg'

const Player = ({ handleKeyPressed, position, currentSprite }) => {
  const autoFocus = useCallback((el) => (el ? el.focus() : null), [])
  let playerSprite = null

  if (currentSprite === 'front') {
    playerSprite = samuraiFront
  } else if (currentSprite === 'back') {
    playerSprite = samuraiBack
  } else if (currentSprite === 'right') {
    playerSprite = samuraiRight
  } else if (currentSprite === 'left') {
    playerSprite = samuraiLeft
  }

  return (
    /* eslint-disable-next-line
    jsx-a11y/no-static-element-interactions,
    jsx-a11y/no-autofocus */
    <div
      className={styles.Player}
      // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
      tabIndex={0}
      onKeyDown={handleKeyPressed}
      ref={autoFocus}
      style={{ gridArea: `${position.row}/${position.column}` }}
    >
      <img alt="player" src={playerSprite} />
    </div>
  )
}

Player.propTypes = {
  handleKeyPressed: PropTypes.func.isRequired,
  position: PropTypes.element.isRequired,
  currentSprite: PropTypes.string.isRequired
}

export default Player
