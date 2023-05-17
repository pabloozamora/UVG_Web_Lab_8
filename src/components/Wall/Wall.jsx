import React from 'react';
import PropTypes from 'prop-types'

const Wall = ({ type }) => (
  <div>{type}</div>
)

Wall.propTypes = { type: PropTypes.string.isRequired }

export default Wall
