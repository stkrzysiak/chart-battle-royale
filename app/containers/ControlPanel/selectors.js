import { createSelector } from 'reselect';

/**
 * Direct selector to the controlPanel state domain
 */
const selectControlPanelDomain = () => state => {
  return state.get('controlPanel');
}

/**
 * Other specific selectors
 */


/**
 * Default selector used by ControlPanel
 */

const selectControlPanel = () => createSelector(
  selectControlPanelDomain(),
  (substate) => substate.toJS()
);

export default selectControlPanel;
export {
  selectControlPanelDomain,
};
