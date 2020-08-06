export const SET_REPO = 'SET_REPO';

/**
 * Set repo.
 *
 * @param {Array<Object>} repos
 */
export function setRepos(repos) {
  return {
    type: SET_REPO,
    payload: repos
  };
}
