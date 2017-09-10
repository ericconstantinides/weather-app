import { FETCH_WEATHER, DELETE_WEATHER } from '../actions/types'

export default function (state = [], action) {
  console.log('Action received: ', action)
  switch (action.type) {
    case FETCH_WEATHER:
      return [action.payload.data, ...state]
    case DELETE_WEATHER:
      console.log(state)
      return state.filter(item => item.city.id !== action.payload)
  }
  return state
}
