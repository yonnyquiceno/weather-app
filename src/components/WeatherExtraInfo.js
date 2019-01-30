import React from 'react';
import PropTypes from 'prop-types'

const WeatherExtraInfo = ({ humidity, wind }) => (
  <div>
    <span>{`La humedad es de: ${humidity}`} % </span>
    <br></br>
    <span>{`El viento es de: ${wind}`} km/h</span>
  </div>
);

WeatherExtraInfo.propTypes = {
  humidity: PropTypes.number.isRequired,
  wind: PropTypes.number.isRequired
}

export default WeatherExtraInfo;