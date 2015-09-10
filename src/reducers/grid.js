import { TICK, TOGGLE, CLEAR, RANDOM } from '../constants/ActionTypes';
import { makeGrid, makeBlankGrid } from '../lib/grid';
import { nextState, toggle } from '../lib/game';

const GRID_SIZE = 30;

const randomizer = (y, x) => Math.random(x + y) > 0.8;
const DEFAULT_STATE = makeGrid(randomizer, GRID_SIZE);
const clone = (xs) => xs.slice();

export default function grid(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case TICK:
      return nextState(state);
    case TOGGLE:
      return toggle(action.coordinates, action.current, clone(state));
    case CLEAR:
      return makeBlankGrid(GRID_SIZE, GRID_SIZE);
    case RANDOM:
      return makeGrid(randomizer, GRID_SIZE);
    default:
      return state;
  }
}
