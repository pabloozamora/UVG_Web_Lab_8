import React from 'react'
import PropTypes from 'prop-types'
import styles from './Floor.module.css'
import floorCity from '../../assets/floorCity.svg'
import floorForest from '../../assets/floorForest.svg'

const Floor = ({ look }) => {
  if (look === 'city') {
    return (
      <div className={styles.Floor}>
        <img alt="" src={floorForest} />
      </div>
    )
  }
  return <div> </div>
}

Floor.propTypes = { look: PropTypes.string.isRequired }

export default Floor
