import range from 'prelude-es6/lib/List/range';
import { TICK, TOGGLE, CLEAR } from '../constants/ActionTypes';
import { nextState, toggle } from '../lib/game';

const GRID_SIZE = 50;
const DEFAULT_STATE = range(GRID_SIZE).map((y) => range(GRID_SIZE).map((x) => (x + y) % 2));
const BLANK_GRID = DEFAULT_STATE.map((y) => y.map(() => 0));

/*
const { map, reduce, assoc, range, toJs, hashMap } = mori;

function generateGrid(size) {
  const r = range(size);
  const reducer = (acc, y) => assoc(acc, y, map(() => (0), r));
  return reduce(reducer, hashMap(), r);
}
*/


export default function grid(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case TICK:
      return nextState(state);
    case TOGGLE:
      return toggle(action.coordinates, action.current, [].concat(state));
    case CLEAR:
      return BLANK_GRID.map((y) => y.map(() => 0));
    default:
      return state;
  }
}
