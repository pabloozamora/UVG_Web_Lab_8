import React from 'react'
import PropTypes from 'prop-types'
import styles from './Floor.module.css'
import floorCity from '../../assets/floorCity.svg'
import floorForest from '../../assets/floorForest.svg'

const Floor = ({ look }) => {
  let floorSprite = null
  if (look === 'city') {
    floorSprite = floorCity
  } else if (look === 'forest') {
    floorSprite = floorForest
  } else if (look === 'mountain') {
    floorSprite = floorForest
  }
  return (
    <div className={styles.Floor}>
      <img alt="" src={floorSprite} />
    </div>
  )
}

Floor.propTypes = { look: PropTypes.string.isRequired }

export default Floor
