import React from 'react';
import PropTypes from 'prop-types'
import verticalWallCity from '../../assets/verticalWallCity.svg'
import verticalWallForest from '../../assets/verticalWallForest.svg'
import horizonalWallCity from '../../assets/horizontalWallCity.svg'
import horizontalWallForest from '../../assets/horizontalWallForest.svg'
import cornerWallCity from '../../assets/cornerWallCity.svg'
import cornerWallForest from '../../assets/cornerWallForest.svg'
import styles from './Wall.module.css'

const Wall = ({ type, look }) => {
  if (look === 'city') {
    if (type === '|') {
      return (
        <div className={styles.verticalWall}>
          <img alt="|" src={verticalWallForest} />
        </div>
      )
    }
    if (type === '-') {
      return (
        <div>
          <img alt="-" src={horizontalWallForest} />
        </div>
      )
    }
    if (type === '+') {
      return (
        <div>
          <img alt="+" src={cornerWallForest} />
        </div>
      )
    }
  }

  return (<p>+</p>)
}

Wall.propTypes = { type: PropTypes.string.isRequired, look: PropTypes.string.isRequired }

export default Wall
