function newKey(key, size) {
  if (key < 0) { return size - 1; }
  if (key >= size) { return 0; }
  return key;
}

export function getNeighbours(grid, { y, x }) {
  const size = grid.length - 1;
  let aliveNeighours = 0;

  const offset = [-1, 0, 1];

  for (let xOffset of offset) {
    const $x = newKey(x + xOffset, size);
    for (let yOffset of offset) {
      if (!xOffset && !yOffset) continue;
      const $y = newKey(y + yOffset, size);
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
