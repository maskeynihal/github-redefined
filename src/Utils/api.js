import axios from 'axios';
import config from '../config';

/**
 * Return header for request.
 *
 * @param {Object} headers
 */
function getHeader(headers) {
  const newHeaders = {
    'Content-Type': 'application/json',
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
 * @param {Object} headers
 */
function handleGetRequest(url, headers = {}) {
  return axios
    .get(prepareRequestUrl(url), getHeader(headers))
    .then((response) => response.data)
    .catch((error) => console.log(error));
}

/**
 * Gives user's Info.
 *
 * @param {String} username
 * @param {Object} headers
 */
function getUserInfo(username, headers = {}) {
  return handleGetRequest(username, headers);
}

/**
 * Get current user repos.
 *
 * @param {String} username
 * @param {Object} headers
 */
function getUserRepos(username, headers = {}) {
  return handleGetRequest(`${username}/repos`, headers);
}
export { getUserInfo, getUserRepos };
