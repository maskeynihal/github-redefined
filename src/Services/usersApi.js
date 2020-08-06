import { getUserInfo, getUserRepos } from 'Utils/api';

const DEFAULT_USERNAME = 'maskeynihal';

/**
 * Get Basic User infor.
 *
 * @param {string} username
 */
export async function getUser(username = DEFAULT_USERNAME) {
  const request = await getUserInfo(username);

  return request;
}

/**
 * Get Current user repos.
 *
 * @param {string} username
 */
export async function getRepos(username = DEFAULT_USERNAME) {
  const request = await getUserRepos(username);

  return request;
}
