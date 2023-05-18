import React from 'react';
import PropTypes from 'prop-types'
import verticalWallCity from '../../assets/verticalWallCity.svg'
import horizonalWallCity1 from '../../assets/horizontalWallCity1.svg'
import cornerWallCity from '../../assets/cornerWallCity.svg'
import styles from './Wall.module.css'

const Wall = ({ type, look }) => {
  if (look === 'city') {
    if (type === '|') {
      return (
        <div className={styles.verticalWallCity}>
          <img alt="|" src={verticalWallCity} />
        </div>
      )
    }
    if (type === '-') {
      return (
        <div>
          <img alt="-" src={horizonalWallCity1} />
        </div>
      )
    }
    if (type === '+') {
      return (
        <div>
          <img alt="+" src={cornerWallCity} />
        </div>
      )
    }
  }

  return (<p>+</p>)
}

Wall.propTypes = { type: PropTypes.string.isRequired, look: PropTypes.string.isRequired }

export default Wall
