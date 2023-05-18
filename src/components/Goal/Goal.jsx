import React from 'react'
import PropTypes from 'prop-types'
import styles from './Goal.module.css'
import cityGoal from '../../assets/goalCity.svg'

const Goal = ({ look }) => {
  let goalSprite = null
  if (look === 'city') {
    goalSprite = cityGoal
  }

  return (
    <div className={styles.Goal}>
      <img alt="goal" src={goalSprite} />
    </div>
  )
}

Goal.propTypes = { look: PropTypes.string.isRequired }

export default Goal
