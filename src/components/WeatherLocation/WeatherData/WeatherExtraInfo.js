import React from 'react';
import PropTypes from 'prop-types'

const WeatherExtraInfo = ({ humidity, wind }) => (
  <div className='weatherExtraInfoContainer'>
    <span>{`La humedad es de ${humidity}`} % </span>
    <br></br>
    <span>{`El viento es de ${wind}`} m/s</span>
  </div>
);

WeatherExtraInfo.propTypes = {
  humidity: PropTypes.number.isRequired,
  wind: PropTypes.number.isRequired
}

export default WeatherExtraInfo;