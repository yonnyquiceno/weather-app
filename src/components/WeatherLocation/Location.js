import React from 'react';
import PropTypes from 'prop-types'
import WeatherIcons from 'react-weathericons';
import {SUNNY} from '../../constants/weathers';

const getWeatherIcon = (weatherState) => {
  if (weatherState)
    return <WeatherIcons name={weatherState}/>
  else
    return <WeatherIcons name={SUNNY}/>
};

const Location = ({ city, country_code, weatherState }) => {
  return (
    <div>
      <h1>
        { `${city}, ${country_code}` }
        <span> { getWeatherIcon(weatherState) } </span>
      </h1>
    </div>
  );
};

Location.propTypes = {
  city: PropTypes.string.isRequired,
  country_code: PropTypes.string.isRequired,
  weatherState: PropTypes.string.isRequired
};

export default Location;