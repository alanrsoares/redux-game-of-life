import { TICK, TOGGLE } from '../constants/ActionTypes';
import { next, toggle } from '../lib/game';
import range from 'prelude-es6/lib/List/range';
import memoize from 'prelude-es6/lib/Func/memoize';

const GRID_SIZE = 25;
const generateGrid = memoize((size) => range(size).map((y) => range(size).map((x) => (x + y) % 2)));

export default function grid(state = generateGrid(GRID_SIZE), action) {
  switch (action.type) {
    case TICK:
      return next(state);
    case TOGGLE:
      return toggle(action.coordinates, action.current, state.slice());
    default:
      return state;
  }
}
