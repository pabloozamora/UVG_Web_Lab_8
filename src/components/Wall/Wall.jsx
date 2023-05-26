import React from 'react';
import PropTypes from 'prop-types'
import verticalWallCity from '../../assets/verticalWallCity.svg'
import verticalWallForest from '../../assets/verticalWallForest.svg'
import verticalWallMountain from '../../assets/verticalWallMountain.svg'
import horizontalWallCity from '../../assets/horizontalWallCity.svg'
import horizontalWallForest from '../../assets/horizontalWallForest.svg'
import horizontalWallMountain from '../../assets/horizontalWallMountain.svg'
import cornerWallCity from '../../assets/cornerWallCity.svg'
import cornerWallForest from '../../assets/cornerWallForest.svg'
import cornerWallMountain from '../../assets/cornerWallMountain.svg'
import styles from './Wall.module.css'

const Wall = ({ type, look }) => {
  let spriteWallVertical = null
  let spriteWallHorizontal = null
  let spriteWallCorner = null
  let styleVWall = styles.verticalWall
  if (look === 'city') {
    spriteWallVertical = verticalWallCity
    spriteWallCorner = cornerWallCity
    spriteWallHorizontal = horizontalWallCity
    styleVWall = styles.verticalWallTall
  } else if (look === 'forest') {
    spriteWallVertical = verticalWallForest
    spriteWallCorner = cornerWallForest
    spriteWallHorizontal = horizontalWallForest
    styleVWall = styles.verticalWallTall
  } else if (look === 'mountain') {
    spriteWallVertical = verticalWallMountain
    spriteWallCorner = cornerWallMountain
    spriteWallHorizontal = horizontalWallMountain
  }
  if (type === '|') {
    return (
      <div className={styleVWall}>
        <img alt="|" src={spriteWallVertical} />
      </div>
    )
  }
  if (type === '-') {
    return (
      <div>
        <img alt="-" src={spriteWallHorizontal} />
      </div>
    )
  }
  if (type === '+') {
    return (
      <div>
        <img alt="+" src={spriteWallCorner} />
      </div>
    )
  }

  return (<p>+</p>)
}

Wall.propTypes = { type: PropTypes.string.isRequired, look: PropTypes.string.isRequired }

export default Wall
