// immutable helper to set array value at index { i }
const set = (i, value, xs) => [
  ...xs.slice(0, i),
  value,
  ...xs.slice(i + 1)
]

const newKey = (size) => (key) => {
  if (key === -1) { return size - 1 }
  if (key === size) { return 0 }
  return key
}

const newKeys = (size, keys) =>
  keys.map(newKey(size))

const combinePositions = ({ y, x }) => {
  const offset = [-1, 0, 1]

  return offset.map(($y) =>
    offset.reduce((acc, $x) =>
      ($x || $y) ? [...acc, [y + $y, x + $x]] : acc,
      []
    )
  ).reduce((a, b) => a.concat(b))
}

const getIn = (grid) => (position) =>
  (([y, x]) => grid[y][x])(newKeys(grid.length, position))

export const getNeighbours = (grid, position) =>
  combinePositions(position)
    .map(getIn(grid))
    .reduce((a, b) => a + b)

export const willLive = (isAlive, neighbours) =>
  isAlive
    ? neighbours >= 2 && neighbours <= 3
    : neighbours === 3

export const nextState = (grid) =>
  grid.map((row, y) =>
    row.map((column, x) =>
      +willLive(column, getNeighbours(grid, { y, x }))
    )
  )

export const toggle = ({ y, x }, current, grid) =>
  set(y, set(x, +!current, grid[y]), grid)
