import * as userActions from 'Actions/userAction';

/**
 * User reducer.
 *
 * @param {Object}state
 * @param {Object} action
 */
export default function userReducer(state = {}, action) {
  switch (action.type) {
    case userActions.SET_USER:
      return { ...state, ...action.payload };
    default:
      return { ...state };
  }
}
