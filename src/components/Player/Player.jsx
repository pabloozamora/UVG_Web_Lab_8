import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import styles from './Player.module.css'

const Player = ({ handleKeyPressed, position }) => {
  const autoFocus = useCallback((el) => (el ? el.focus() : null), [])

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
    />
  )
}

Player.propTypes = {
  handleKeyPressed: PropTypes.func.isRequired,
  position: PropTypes.element.isRequired,
}

export default Player
