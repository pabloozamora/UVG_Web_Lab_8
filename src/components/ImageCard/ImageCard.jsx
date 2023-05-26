/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react'
import PropTypes from 'prop-types'
import randomId from '../../helpers/randomString'
import styles from './ImageCard.module.css'

const ImageCard = ({
  name, title, onClick, selected, img,
}) => {
  const id = randomId(15)
  return (
    <div className={styles.imageCardContainer}>
      <label htmlFor={id}>
        {title}
      </label>
      <div
        name={name}
        onClick={onClick}
        className={selected ? styles.imageCardSelected : styles.imageCard}
      >
        <img className={styles.scenarioImg} alt="scenario" src={img} />
      </div>
    </div>
  )
}

ImageCard.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
  img: PropTypes.string.isRequired,
}

export default ImageCard
