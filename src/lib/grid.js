import range from 'prelude-es6/List/range';
import curry from 'prelude-es6/Func/curry';

const always = (x) => () => x;
const ZERO = always(0);

export const makeGrid = curry((cell, size) => {
  const r = range(size);
  return r.map((y) => r.map((x) => cell(y, x)));
});

export const makeBlankGrid = makeGrid(ZERO);
