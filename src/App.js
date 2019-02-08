import React, { Component } from 'react';
import './App.css';
import WeatherList from './components/WeatherList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <WeatherList cities={['Quibdó, co', 'Mocoa, col', 'Paris, fr', 'Madrid, es', 'Medellín, co', 'Buenos Aires, ar', 'lima, pe']}></WeatherList>
      </div>
    );
  }
}

export default App;
