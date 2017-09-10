import React, { Component } from 'react'
import { connect } from 'react-redux'
import Chart from '../components/chart'
import GoogleMap from '../components/google_map'
import * as actions from '../actions'

class WeatherList extends Component {
  renderWeather = (cityData) => {
    const temps = cityData.list.map(weather => weather.main.temp)
    const humidity = cityData.list.map(weather => weather.main.humidity)
    const pressure = cityData.list.map(weather => weather.main.pressure)
    const { lon, lat } = cityData.city.coord

    return (
      <tr key={cityData.city.id}>
        <td>
          <button onClick={() => this.props.deleteWeather(cityData.city.id)} className='btn btn-sm btn-primary'>Delete</button>
        </td>
        <td><GoogleMap className='google-map' lat={lat} lon={lon} /></td>
        <td><Chart data={temps} color='orange' unit='K' /></td>
        <td><Chart data={humidity} color='green' unit='hPa' /></td>
        <td><Chart data={pressure} color='black' unit='%' /></td>
      </tr>
    )
  }

  render () {
    return (
      <table className='table table-hover'>
        <thead>
          <tr>
            <th>&nbsp;</th>
            <th>Map</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPA)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps ({ weather }) {
  return { weather }
}

export default connect(mapStateToProps, actions)(WeatherList)
