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

const combinePositions = ({ y, x }) =>
  [-1, 0, 1].reduce((a, $y, _, offset) =>
    offset.reduce((b, $x) =>
      ($x || $y) ? [...b, [y + $y, x + $x]] : b,
      a
    ),
    []
  )

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
      willLive(column, getNeighbours(grid, { y, x }))
    )
  )

export const toggle = ({ y, x }, current, grid) =>
  set(y, set(x, +!current, grid[y]), grid)
