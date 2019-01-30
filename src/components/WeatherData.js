import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import {
  CLOUD,
  CLOUDY,
  SUNNY,
  RAINY,
  SNOW,
  WINDY
} from './../constants/weathers';

const WeatherData = () => (
  <div>
    <WeatherTemperature
      temperature={56}
      weatherState={CLOUDY}
    >
    </WeatherTemperature>
    <WeatherExtraInfo
      humidity={76}
      wind={30}
    >
    </WeatherExtraInfo>
  </div>
);

export default WeatherData;