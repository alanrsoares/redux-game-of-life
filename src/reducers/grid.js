import { TICK, TOGGLE } from '../actions/grid';
import compact from 'prelude-es6/lib/List/compact';

function getNeighbours(grid, coords) {
  const { y, x } = coords;
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
  : neighbours is 3;

const nextGeneration = (grid) =>
  grid.map((row, y) => row.map((column, x) =>
    +isGoingToLive(column, getAliveNeighbours(grid, { x, y }))));

export default function grid(state = [], action) {
  switch (action.type) {
  case TICK:
    return nextGeneration(state);
  case TOGGLE:
    return state - 1;
  default:
    return state;
  }
}
