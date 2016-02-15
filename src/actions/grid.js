import { createAction } from 'redux-actions'

import * as types from '../constants/ActionTypes'

export const start = createAction(types.START)
export const stop = createAction(types.STOP)
export const tick = createAction(types.TICK)
export const toggle = createAction(types.TOGGLE)
export const reset = createAction(types.RESET)
export const random = createAction(types.RANDOM)
