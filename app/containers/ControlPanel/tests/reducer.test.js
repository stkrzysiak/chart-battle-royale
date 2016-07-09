import expect from 'expect';
import controlPanelReducer from '../reducer';
import { fromJS } from 'immutable';

describe('controlPanelReducer', () => {
  it('returns the initial state', () => {
    expect(controlPanelReducer(undefined, {})).toEqual(fromJS({}));
  });
});
