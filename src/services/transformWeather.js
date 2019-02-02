import {SNOW} from '../constants/weathers';

const getWeatherState = weather_data => {
  return SNOW;
}

const transformWeather = (weather_data) => {
  const {humidity, temp} = weather_data.main;
  const {speed} = weather_data.wind;
  const weatherState = SNOW;

  const data = {
    humidity,
    temperature: temp,
    weatherState,
    wind: speed
  }
  return data
}

export default transformWeather;