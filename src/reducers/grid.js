import { TICK, TOGGLE } from '../constants/ActionTypes';
import { compact, range } from 'prelude-es6/lib/List';
import clone from 'prelude-es6/lib/Obj/clone';

function getNeighbours(grid, { y, x }) {
  const prev = grid[y - 1] || [];
  const next = grid[y + 1] || [];
  return [
    prev[x - 1],    prev[x],   prev[x + 1],
    grid[y][x - 1], grid[y][x + 1],
    next[x - 1],    next[x],   next[x + 1]
  ];
}

function getAliveNeighbours(grid, coords) {
  const neighbours = getNeighbours(grid, coords);
  return compact(neighbours).length;
}

const isGoingToLive = (isAlive, neighbours) => isAlive
  ? neighbours >= 2 && neighbours <= 3
  : neighbours === 3;

const nextGeneration = (grid) =>
  grid.map((row, y) => row.map((column, x) =>
    +isGoingToLive(column, getAliveNeighbours(grid, { x, y }))));

const defaultState = range(20).map((y) => range(20).map((x) => (x + y) % 2));

function toggle({ y, x }, current, grid) {
  grid[y][x] = +!!!current;
  return grid.slice();
}

export default function grid(state = defaultState, action) {
  switch (action.type) {
    case TICK:
      return nextGeneration(state);
    case TOGGLE:
      return toggle(action.coordinates, action.current, state);
    default:
      return state;
  }
}
