import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData'
import {SNOW} from '../../constants/weathers';
import {api_weather} from '../../constants/weatherApi';
import transformWeather from './../../services/transformWeather'

class WeatherLocation extends Component {

  constructor() {
    super();
    this.state = {
      city: 'Buenos Aires',
      country_code: null,
      data: null
    };
  }

  componentDidMount() {
    this.handleUpdateClick()
  }


  handleUpdateClick = () => {
    fetch(api_weather).then( response => {
      return response.json()
    }).then(data => {
      console.log(data);
      const newWeatherData = transformWeather(data);
      this.setState({
        city: data.name,
        country_code: data.sys.country,
        data: newWeatherData
      })
    });
  }

  render() {

    const { city, country_code, data} = this.state;

    return(
      <div>

        {data ?
          <span>
            <Location city={city} country_code={country_code} weatherState={data.weatherState}/>
            <WeatherData data={data}/>
          </span> :
          <div> loading ... </div>
        }
      </div>
    )
  }

};

export default WeatherLocation;
