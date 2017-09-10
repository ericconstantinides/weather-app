import { combineReducers } from 'redux'
import WeatherReducer from './reducer_weather'

const rootReducer = combineReducers({
  weather: WeatherReducer
  // this is just a placeholder:
  // state: (state = {}) => state
})

export default rootReducer
