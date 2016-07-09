/*
 *
 * ControlPanel actions
 *
 */

import {
  ADJUST_HEIGHT,
  ADJUST_WIDTH,
} from './constants';

export function adjustWidth(width) {
  return {
    type: ADJUST_WIDTH,
    width,
  };
}

export function adjustHeight(height) {
  return {
    type: ADJUST_HEIGHT,
    height,
  };
}
