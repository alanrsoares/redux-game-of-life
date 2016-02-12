import { handleActions } from 'redux-actions'

import * as types from '../constants/ActionTypes'
import { makeGrid, makeBlankGrid } from '../lib/grid'
import { nextState, toggle } from '../lib/game'

const GRID_SIZE = 30

const randomizer = (y, x) => Math.random(x + y) > 0.8

const DEFAULT_STATE = {
  grid: makeGrid(randomizer, GRID_SIZE),
  profiler: {
    frameId: null,
    startedAt: null,
    ticks: 0
  }
}

const actionHandlers = {
  [types.START]: (state) => ({ ...state, running: true }),
  [types.STOP]: (state) => ({ ...state, running: false }),
  [types.TICK]: (state) => ({ ...state, grid: nextState(state.grid) }),
  [types.CLEAR]: (state) => ({ ...state, grid: makeBlankGrid(GRID_SIZE, GRID_SIZE) }),
  [types.RANDOM]: (state) => ({ ...state, grid: makeGrid(randomizer, GRID_SIZE) }),
  [types.TOGGLE]: (state, { payload }) => ({
    ...state,
    grid: toggle(payload.coordinates, payload.current, grid)
  })
}

export default handleActions(
  actionHandlers,
  DEFAULT_STATE
)
