import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import styles from './Player.module.css'
import samuraiFront from '../../assets/SamuraiFront.svg'
import samuraiBack from '../../assets/SamuraiBack.svg'
import samuraiRight from '../../assets/SamuraiRight.svg'
import samuraiLeft from '../../assets/SamuraiLeft.svg'
import ninjaFront from '../../assets/ninjaFront.svg'
import ninjaBack from '../../assets/ninjaBack.svg'
import ninjaRight from '../../assets/ninjaRight.svg'
import ninjaLeft from '../../assets/ninjaLeft.svg'
import rangerFront from '../../assets/rangerFront.svg'
import rangerBack from '../../assets/rangerBack.svg'
import rangerRight from '../../assets/rangerRight.svg'
import rangerLeft from '../../assets/rangerLeft.svg'

const Player = ({ handleKeyPressed, position, currentSprite, character }) => {
  const autoFocus = useCallback((el) => (el ? el.focus() : null), [])
  let playerSprite = null

  if (currentSprite === 'front') {
    if (character === 'samurai') {
      playerSprite = samuraiFront
    } else if (character === 'ninja') {
      playerSprite = ninjaFront
    } else if (character === 'ranger') {
      playerSprite = rangerFront
    }
  } else if (currentSprite === 'back') {
    if (character === 'samurai') {
      playerSprite = samuraiBack
    } else if (character === 'ninja') {
      playerSprite = ninjaBack
    } else if (character === 'ranger') {
      playerSprite = rangerBack
    }
  } else if (currentSprite === 'right') {
    if (character === 'samurai') {
      playerSprite = samuraiRight
    } else if (character === 'ninja') {
      playerSprite = ninjaRight
    } else if (character === 'ranger') {
      playerSprite = rangerRight
    }
  } else if (currentSprite === 'left') {
    if (character === 'samurai') {
      playerSprite = samuraiLeft
    } else if (character === 'ninja') {
      playerSprite = ninjaLeft
    } else if (character === 'ranger') {
      playerSprite = rangerLeft
    }
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
  position: PropTypes.objectOf(String).isRequired,
  currentSprite: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
}

export default Player
