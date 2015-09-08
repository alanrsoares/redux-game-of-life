import compact from 'prelude-es6/lib/List/compact';

export function getNeighbours(grid, { y, x }) {
  const prev = grid[y - 1] || [];
  const next = grid[y + 1] || [];
  return [
    prev[x - 1],    prev[x],   prev[x + 1],
    grid[y][x - 1], grid[y][x + 1],
    next[x - 1],    next[x],   next[x + 1]
  ];
}

export function getAliveNeighbours(grid, coords) {
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
    +isGoingToLive(column, getAliveNeighbours(grid, { x, y }))));
}

export function toggle({ y, x }, current, grid) {
  grid[y][x] = +!current;
  return grid;
}
