import React from 'react';
import PropTypes from 'prop-types';

const WeatherTemperature = ({temperature}) => {
  return (
    <div className="weatherTemperatureContainer">
      <span>
        {`La temperatura es de ${temperature} C°`}
      </span>
    </div>
  );
};

WeatherTemperature.propTypes = {
  temperature: PropTypes.number.isRequired
};

export default WeatherTemperature;