/*
 *
 * ControlPanel reducer
 *
 */

import { fromJS } from 'immutable';
import {
  ADJUST_HEIGHT,
  ADJUST_WIDTH,
} from './constants';

const initialState = fromJS({ width: 600, height: 800 });

function controlPanelReducer(state = initialState, action) {
  switch (action.type) {
    case ADJUST_WIDTH:
      return state.set('width', action.width);
    case ADJUST_HEIGHT:
      return state.set('height', action.height);
    default:
      return state;
  }
}

export default controlPanelReducer;
