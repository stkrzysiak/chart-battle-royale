/*
 *
 * ControlPanel reducer
 *
 */

import { fromJS } from 'immutable';
import {
  ADJUST_HEIGHT,
  ADJUST_WIDTH,
  UPDATE_DATA_POINTS,
} from './constants';

const initialState = fromJS({ width: 600, height: 800, dataPoints: 2 });

function controlPanelReducer(state = initialState, action) {
  switch (action.type) {
    case ADJUST_WIDTH:
      return state.set('width', action.width);
    case ADJUST_HEIGHT:
      return state.set('height', action.height);
    case UPDATE_DATA_POINTS: {
      let tmp = state.get('dataPoints');
      tmp = action.direction === 'up' ? ++tmp : --tmp;
      return state.set('dataPoints', tmp);
    }
    default:
      return state;
  }
}

export default controlPanelReducer;
