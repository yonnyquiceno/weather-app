import React, { Component } from 'react';
import './styles.css'
import Location from './Location';
import WeatherData from './WeatherData'
import transformWeather from './../../services/transformWeather';
import constructGetEndpoint from './../../services/constructGetEndpoint';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types'

class WeatherLocation extends Component {

  constructor(props) {
    super(props);
    const { city } = props;
    this.state = {
      city,
      country_code: null,
      data: null
    };
  }

  componentDidMount() {
    this.getWeather()
  }

  getWeather = () => {
    const endpoint = constructGetEndpoint(this.state.city);
    fetch(endpoint).then( response => {
      return response.json()
    }).then(data => {
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

WeatherLocation.propTypes = {
  city: PropTypes.string.isRequired
}

export default WeatherLocation;
