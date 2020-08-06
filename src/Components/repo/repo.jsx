import React from 'react';
import PropTypes from 'prop-types';
/**
 * Single Repo card.
 */
function Repo({ repo }) {
  return (
    <div>
      <a href={repo.html_url}>
        <div className="repo">
          <div className="repo__topbar">
            <div className="repo__update-status">
              Updated at (<span>{repo.updated_at}</span>)
            </div>
          </div>
          <div className="repo__text">
            <div className="repo__heading">{repo.name}</div>
            <div className="repo__description">{repo.description}</div>
          </div>
          <div className="repo__footer">
            <div className="repo__tag">{repo.language}</div>
          </div>
        </div>
      </a>
    </div>
  );
}

Repo.propTypes = {
  repo: PropTypes.object
};
export default Repo;
