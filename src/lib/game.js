import compact from 'prelude-es6/lib/List/compact';
import curry from 'prelude-es6/lib/Func/curry';
import memoize from 'prelude-es6/lib/Func/memoize';

const validIndex = curry((size, idx) => idx < 0 ? size : idx > size ? 0 : idx);
const get = curry((xs, id) => xs[id]);

export function getNeighbours(grid, { y, x }) {
  const v = memoize(validIndex(grid.length - 1));
  const [prev, next] = [v(y - 1), v(y + 1)].map(get(grid));
  const ids = [x, v(x - 1), v(x + 1)];

  return [
    ...ids.map(get(prev)),
    ...ids.map(get(next)),
    ...ids.slice(1).map(get(grid[y]))
  ];
}

export function getAliveNeighbours(coords, grid) {
  const neighbours = getNeighbours(grid, coords);
  return compact(neighbours).length;
}

export const isGoingToLive = memoize((isAlive, neighbours) => {
  return isAlive
    ? neighbours >= 2 && neighbours <= 3
    : neighbours === 3;
});

export function next(grid) {
  return grid.map((row, y) => row.map((column, x) =>
    +isGoingToLive(column, getAliveNeighbours({ x, y }, grid))));
}

export function toggle({ y, x }, current, grid) {
  grid[y][x] = +!current;
  return grid;
}
