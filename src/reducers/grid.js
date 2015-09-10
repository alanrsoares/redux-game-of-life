import range from 'prelude-es6/lib/List/range';
import { TICK, TOGGLE, CLEAR, RANDOM } from '../constants/ActionTypes';
import { nextState, toggle } from '../lib/game';

function randomGrid(width, height = width) {
  const ys = range(width);
  const xs = range(height);
  return ys.map((y) => xs.map((x) => Math.random(x + y) > 0.8))
}

const clone = (xs) => xs.slice();

const GRID_SIZE = 30;
const DEFAULT_STATE = randomGrid(GRID_SIZE);
const BLANK_GRID = DEFAULT_STATE.map((y) => y.map(() => 0));

export default function grid(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case TICK:
      return nextState(state);
    case TOGGLE:
      return toggle(action.coordinates, action.current, clone(state));
    case CLEAR:
      return clone(BLANK_GRID);
    case RANDOM:
      return randomGrid(GRID_SIZE);
    default:
      return clone(state);
  }
}
