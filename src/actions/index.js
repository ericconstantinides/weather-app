import Axios from 'axios'
import { FETCH_WEATHER, DELETE_WEATHER } from './types'

const API_KEY = '38fd6956e5c4d73137ff009313035750'
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?APPID=${API_KEY}`

export function fetchWeather (city) {
  const url = `${ROOT_URL}&q=${city},us`
  const request = Axios.get(url)

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}

export function deleteWeather (id) {
  return {
    type: DELETE_WEATHER,
    payload: id
  }
}
