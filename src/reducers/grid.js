import { handleActions } from 'redux-actions'

import { TICK, TOGGLE, CLEAR, RANDOM } from '../constants/ActionTypes'
import { makeGrid, makeBlankGrid } from '../lib/grid'
import { nextState, toggle } from '../lib/game'

const GRID_SIZE = 30

const randomizer = (y, x) => Math.random(x + y) > 0.8
const DEFAULT_STATE = makeGrid(randomizer, GRID_SIZE)
const clone = (xs) => xs.slice()

const actionHandlers = {
  [TICK]: (state) => nextState(state),
  [TOGGLE]: (state, action) => toggle(action.coordinates, action.current, clone(state)),
  [CLEAR]: () => makeBlankGrid(GRID_SIZE, GRID_SIZE),
  [RANDOM]: () => makeGrid(randomizer, GRID_SIZE)
}

export default handleActions(
  actionHandlers,
  DEFAULT_STATE
)
