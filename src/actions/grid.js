import { createAction } from 'redux-actions';

import * as types from '../constants/ActionTypes';

export const tick = createAction(types.TICK);
export const toggle = createAction(types.TOGGLE);
export const clear = createAction(types.CLEAR);
export const random = createAction(types.RANDOM);
