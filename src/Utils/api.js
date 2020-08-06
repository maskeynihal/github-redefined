import axios from 'axios';
import config from '../config';

const DEFAULT_CONFIG = {
  headers: {},
  params: {}
};

/**
 * Prepare config.
 */
function prepareConfig({ headers, params, ...config }) {
  return {
    headers: getHeader(headers),
    params,
    ...config
  };
}
/**
 * Return header for request.
 *
 * @param {Object} headers
 */
function getHeader(headers) {
  const newHeaders = {
    'Content-Type': 'application/vnd.github.v3+json',
    ...headers
  };

  if (config.apiKey) {
    newHeaders['Authorization'] = 'API AUTHORIZATION KEY';
  }

  return newHeaders;
}
/**
 * Prepare request url.
 *
 * @param {string} url
 */
function prepareRequestUrl(url) {
  return `${config.API_BASE_URL}/${url}`;
}

/**
 * Get Request.
 *
 * @param {string} url
 * @param config
 * @param {Object} headers
 */
function handleGetRequest(url, config = DEFAULT_CONFIG) {
  return axios
    .get(prepareRequestUrl(url), prepareConfig(config))
    .then((response) => response.data)
    .catch((error) => console.log(error));
}

/**
 * Gives user's Info.
 *
 * @param {String} username
 * @param {Object}config
 */
function getUserInfo(username, config = DEFAULT_CONFIG) {
  return handleGetRequest(`users/${username}`, config);
}

/**
 * Get current user repos.
 *
 * @param {String} username
 * @param {Object}config
 */
function getUserRepos(username, config = DEFAULT_CONFIG) {
  return handleGetRequest(`${username}/repos`, config);
}

/**
 * Search users in github.
 *
 * @param {string} query
 */
function searchGithubUsers(query, { ...config }) {
  const params = { q: query, ...config };
  const newConfig = prepareConfig({ params, ...config });

  return handleGetRequest('search/users', newConfig);
}

export { getUserInfo, getUserRepos, searchGithubUsers };
