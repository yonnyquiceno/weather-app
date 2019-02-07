import React, { Component } from 'react';
import './styles.css'
import Location from './Location';
import WeatherData from './WeatherData'
import {api_weather} from '../../constants/weatherApi';
import transformWeather from './../../services/transformWeather'
import CircularProgress from '@material-ui/core/CircularProgress';

class WeatherLocation extends Component {

  constructor() {
    super();
    this.state = {
      city: null,
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
          <span>
            <div className="spacer-mid"></div>
            <CircularProgress size={50}/>
          </span>
        }
      </div>
    )
  }

};

export default WeatherLocation;
