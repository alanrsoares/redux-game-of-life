import { handleActions } from 'redux-actions'

import * as types from '../constants/ActionTypes'
import { makeGrid, makeBlankGrid } from '../lib/grid'
import { nextState, toggle } from '../lib/game'
import { randomizer } from '../lib/utils'

const GRID_SIZE = 30

const DEFAULT_STATE = makeGrid(randomizer, GRID_SIZE)

const actionHandlers = {
  [types.TICK]: nextState,
  [types.RESET]: (state) =>
    makeBlankGrid(GRID_SIZE, GRID_SIZE),
  [types.RANDOM]: (state, { payload }) =>
    makeGrid(payload.randomizer, GRID_SIZE),
  [types.TOGGLE]: (state, { payload }) =>
    toggle(payload.coordinates, payload.current, state)
}

export default handleActions(
  actionHandlers,
  DEFAULT_STATE
)
