import { handleActions } from 'redux-actions'

import * as types from '../constants/ActionTypes'
import { makeGrid, makeBlankGrid } from '../lib/grid'
import { nextState, toggle } from '../lib/game'

const GRID_SIZE = 30

const randomizer = (y, x) => Math.random(x + y) > 0.8

const DEFAULT_STATE = makeGrid(randomizer, GRID_SIZE)

const actionHandlers = {
  [types.TICK]: (state, { payload }) =>
    nextState(state),
  [types.CLEAR]: (state) =>
    makeBlankGrid(GRID_SIZE, GRID_SIZE),
  [types.RANDOM]: () =>
    makeGrid(randomizer, GRID_SIZE),
  [types.TOGGLE]: (state, { payload }) =>
    toggle(payload.coordinates, payload.current, state)
}

export default handleActions(
  actionHandlers,
  DEFAULT_STATE
)
