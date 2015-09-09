import compact from 'prelude-es6/lib/List/compact';
import curry from 'prelude-es6/lib/Func/curry';

function newKey(key, offset, size) {
  let $key = key + offset;
  if ($key < 0) { $key = size - 1; }
  if ($key >= size) { $key = 0; }
  return $key;
}

export function getNeighbours(grid, { y, x }) {
  const size = grid.length - 1;
  let aliveNeighours = 0;

  for (let xOffset = -1; xOffset <= 1; ++xOffset) {
    for (let yOffset = -1; yOffset <= 1; ++yOffset) {
      if (!xOffset && !yOffset) continue;
      const $x = newKey(x, xOffset, size);
      const $y = newKey(y, yOffset, size);
      aliveNeighours += +!!grid[$y][$x];
    }
  }
  return aliveNeighours;
}

export function willLive(isAlive, neighbours) {
  return isAlive
    ? neighbours >= 2 && neighbours <= 3
    : neighbours === 3
}

export function nextState(grid) {
  return grid.map((row, y) => row.map((column, x) =>
    +willLive(column, getNeighbours(grid, { x, y }))));
}

export function toggle({ y, x }, current, grid) {
  grid[y][x] = +!current;
  return grid;
}
