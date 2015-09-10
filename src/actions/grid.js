import * as types from '../constants/ActionTypes';

export function tick() {
  return {
    type: types.TICK
  }
}

export function toggle(coordinates, current) {
  return {
    type: types.TOGGLE,
    coordinates,
    current
  }
}

export function clear() {
  return {
    type: types.CLEAR
  }
}

export function random() {
  return {
    type: types.RANDOM
  }
}
