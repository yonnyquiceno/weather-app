import React from 'react';
import PropTypes from 'prop-types'
import WeatherIcons from 'react-weathericons';
import {SUN, CLOUDY, RAIN, SNOW, THUNDER, DRIZZLE} from '../../constants/weathers';

const icons = {
  [SUN]: "day-sunny",
  [CLOUDY]: "cloudy",
  [RAIN]: "rain",
  [SNOW]: "snow",
  [THUNDER]: "day-thunderstone",
  [DRIZZLE]: "day-showers"
}

const getWeatherIcon = (weatherState) => {
  if (weatherState)
    return <WeatherIcons name={icons[weatherState]}/>
  else
    return <WeatherIcons name={SUN}/>
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