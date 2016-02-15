import { combineReducers } from 'redux'
import grid from './grid'
import profiler from './profiler'

const rootReducer = combineReducers({
  grid,
  profiler
})

export default rootReducer
