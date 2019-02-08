import React, { Component } from 'react';
import PropTypes from 'prop-types'
import WeatherLocation from './../WeatherLocation';

class WeatherList extends Component {

  constructor(props) {
    const { cities } = props
    super(props);
    this.state = {
      cities
    }
  }

  renderWeatherLocations = () => {
    const items = []
    var idx = 0
    this.state.cities.map(function(city) {
      items.push(<WeatherLocation key={idx} city={city}></WeatherLocation>)
      idx ++
      return null
    })

    return (
      items
    )
  }


  render() {
    return(
      <div>
        { this.renderWeatherLocations() }
      </div>
    )
  }

}

WeatherList.proptTypes = {
  cities: PropTypes.array.isRequired
}

export default WeatherList;

