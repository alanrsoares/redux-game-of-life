import compact from 'prelude-es6/lib/List/compact';
import curry from 'prelude-es6/lib/Func/curry';
import memoize from 'prelude-es6/lib/Func/memoize';

const valueOrDefault = (val, def) => typeof val === 'undefined' ? def : val;
const validIndex = curry((size, idx) => idx < 0 ? size : idx > size ? 0 : idx);

export function getNeighbours(grid, { y, x }) {
  const v = memoize(validIndex(grid.length - 1));
  const [prev, next] = [v(y - 1), v(y + 1)].map(id => grid[id]);
  const ids = [v(x - 1), x, v(x + 1)];

  return [
    ...ids.map((id) => prev[id]),
    ...ids.map((id) => next[id]),
    ...[v(x - 1), v(x + 1)].map((id) => grid[y][id])
  ];
}

export function getAliveNeighbours(coords, grid) {
  const neighbours = getNeighbours(grid, coords);
  return compact(neighbours).length;
}

export function isGoingToLive(isAlive, neighbours) {
  return isAlive
    ? neighbours >= 2 && neighbours <= 3
    : neighbours === 3;
}

export function next(grid) {
  return grid.map((row, y) => row.map((column, x) =>
    +isGoingToLive(column, getAliveNeighbours({ x, y }, grid))));
}

export function toggle({ y, x }, current, grid) {
  grid[y][x] = +!current;
  return grid;
}
