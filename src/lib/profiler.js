export const calculateFrameRate = (ticks, startedAt, now) =>
  startedAt
  ? Math.ceil(ticks / ((now - startedAt) / 1000))
  : null
