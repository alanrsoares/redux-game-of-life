import { handleActions } from 'redux-actions'

import * as types from '../constants/ActionTypes'
import { calculateFrameRate } from '../lib/profiler'

const DEFAULT_STATE = {
  frameId: null,
  startedAt: null,
  ticks: 0,
  frameRate: null
}

const actionHandlers = {
  [types.START]: (state, { payload }) => ({
    ...state,
    startedAt: payload
  }),
  [types.STOP]: (state) => ({
    ...state,
    frameId: null,
    startedAt: null,
    ticks: 0
  }),
  [types.TICK]: (state, { payload }) => ({
    ...state,
    ticks: state.ticks + 1,
    frameId: payload.frameId,
    frameRate: calculateFrameRate(state.ticks + 1, state.startedAt, Date.now())
  })
}

export default handleActions(
  actionHandlers,
  DEFAULT_STATE
)
