// immutable helper to set array value at index { i }
const set = (i, value, xs) => [
  ...xs.slice(0, i),
  value,
  ...xs.slice(i + 1)
];

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
      // excludes the current cell
      if (!xOffset && !yOffset) continue;
      const $y = newKey(y + yOffset, size);
      aliveNeighours += +!!grid[$y][$x];
    }
  }

  return aliveNeighours;
}

export const willLive = (isAlive, neighbours) =>
  isAlive
    ? neighbours >= 2 && neighbours <= 3
    : neighbours === 3;

export const nextState = (grid) =>
  grid.map((row, y) =>
    row.map((column, x) =>
      +willLive(column, getNeighbours(grid, { x, y }))
    )
  );

export const toggle = ({ y, x }, current, grid) =>
  set(y, set(x, +!current, grid[y]), grid);
