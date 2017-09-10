import React, { Component } from 'react'

class GoogleMap extends Component {
  componentDidMount () {
    new google.maps.Map(this.refs.cityMap, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    })
  }
  render () {
    return <div ref='cityMap' />
  }
}
export default GoogleMap
