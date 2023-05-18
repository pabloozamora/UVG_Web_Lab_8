import React from 'react'
import PropTypes from 'prop-types'
import styles from './Floor.module.css'
import floorCity from '../../assets/floorCity.svg'

const Floor = ({ look }) => {
  if (look === 'city') {
    return (
      <div className={styles.Floor}>
        <img alt="" src={floorCity} />
      </div>
    )
  }
  return <div> </div>
}

Floor.propTypes = { look: PropTypes.string.isRequired }

export default Floor
