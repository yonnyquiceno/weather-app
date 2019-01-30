import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import {
  CLOUD,
  CLOUDY,
  SUNNY,
  RAINY,
  SNOW,
  WINDY
} from './../constants/weathers';

const getWeatherIcon = (weatherState) => {
  if (weatherState)
    return <WeatherIcons name={weatherState} size="2x"/>
  else
    return <WeatherIcons name={SUNNY} size="2x"/>
};

const WeatherTemperature = ({temperature, weatherState}) => {
  return (
    <div>
      <span>
        { getWeatherIcon(weatherState)}
        {`La temperatura es de ${temperature} C°`}
      </span>
    </div>
  );
};

WeatherTemperature.propTypes = {
  temperature: PropTypes.number.isRequired,
  weatherState: PropTypes.string.isRequired
};

export default WeatherTemperature;