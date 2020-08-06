import React from 'react';
import PropTypes from 'prop-types';

import logo from 'logo.svg';
/**
 * Search List.
 */
function SearchList({ user }) {
  return (
    <div className="search-list">
      <div className="search-list__image">
        <img src={logo} alt="" />
      </div>
      <div className="search-list__text">
        <div className="search-list__heading">{user.name}</div>
        <div className="search-list__description">{user.name}</div>
      </div>
    </div>
  );
}

SearchList.propTypes = {
  user: PropTypes.object.isRequired
};

export default SearchList;
