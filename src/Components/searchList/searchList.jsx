import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
/**
 * Search List.
 */
function SearchList({ user }) {
  return (
    <Link to={`/user/${user.login}`}>
      <div className="search-list">
        <div className="search-list__image">
          <img src={user.avatar_url} alt="" />
        </div>
        <div className="search-list__text">
          <div className="search-list__heading">{user.login}</div>
          <div className="search-list__description">{user.type}</div>
        </div>
      </div>
    </Link>
  );
}

SearchList.propTypes = {
  user: PropTypes.object.isRequired
};

export default SearchList;
