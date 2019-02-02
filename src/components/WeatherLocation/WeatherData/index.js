import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import PropTypes from 'prop-types'
import './styles.css'

const WeatherData = ({data: { temperature, weatherState, wind, humidity }}) => (
  <div className='weatherDataContainer'>
    <WeatherTemperature
      temperature={temperature}
    >
    </WeatherTemperature>
    <WeatherExtraInfo
      humidity={humidity}
      wind={wind}
    >
    </WeatherExtraInfo>
  </div>
);

WeatherData.propTypes = {
  data: PropTypes.shape({
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string,
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.number.isRequired
  })
}

export default WeatherData;