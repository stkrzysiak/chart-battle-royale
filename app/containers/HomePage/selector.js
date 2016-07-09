import { createSelector } from 'reselect';

/**
 * Direct selector to the homePage state domain
 */
const selectHomePageDomain = () => state => {
  console.log(state.get('controlPanel').toJS(), 'state is');
  return state.get('controlPanel');
}

/**
 * Other specific selectors
 */


/**
 * Default selector used by ControlPanel
 */

const selectHomePage = () => createSelector(
  selectHomePageDomain(),
  (substate) => substate.toJS()
);

export default selectHomePage;
export {
  selectHomePageDomain,
};
