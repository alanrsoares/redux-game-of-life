import range from 'prelude-es6/lib/List/range';
import { TICK, TOGGLE, CLEAR } from '../constants/ActionTypes';
import { next, toggle } from '../lib/game';

const GRID_SIZE = 10;
const DEFAULT_STATE = range(GRID_SIZE).map((y) => range(GRID_SIZE).map((x) => (x + y) % 2));
const BLANK_GRID = DEFAULT_STATE.map((y) => y.map(() => 0));

export default function grid(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case TICK:
      return next(state);
    case TOGGLE:
      return toggle(action.coordinates, action.current, state.slice());
    case CLEAR:
      return BLANK_GRID;
    default:
      return state;
  }
}
