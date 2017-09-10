import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchWeather } from '../actions/index'

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = { term: '' }

    // not needed since we're doing arrow functions here
    // this.handleInputChange = this.handleInputChange.bind(this)
    // this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }
  handleInputChange = e => {
    this.setState({term: e.target.value})
  }
  handleSubmit = e => {
    e.preventDefault()
    this.props.fetchWeather(encodeURI(this.state.term))
    this.setState({term: ''})
  }
  render () {
    return (
      <form className='input-group' onSubmit={this.handleSubmit}>
        <input
          placeholder='Get a five-day forecast in your favorite cities'
          className='form-control'
          ref='inputCity'
          value={this.state.term}
          onChange={this.handleInputChange}
        />
        <span className='input-group-btn'>
          <button type='submit' className='btn btn-secondary'>Submit</button>
        </span>
      </form>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar)