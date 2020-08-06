import * as repoActions from 'Actions/repoAction';

/**
 * Repo reducer.
 *
 * @param {Object} state
 * @param {Object} action
 */
export default function repoReducer(state = {}, action) {
  switch (action.type) {
    case repoActions.SET_REPO:
      return { ...state, ...action.payload };
    default:
      return { ...state };
  }
}
