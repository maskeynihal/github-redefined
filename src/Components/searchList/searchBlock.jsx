import React from 'react';

import { SearchList } from 'Components/searchList';
/**
 * Search Modal which contains search List.
 */
function searchBlock({ isLoading, users, imageWidth, ...props }) {
  return (
    <div className="search__block">
      {isLoading ? (
        <div> Loading </div>
      ) : (
        users.map((user) => <SearchList user={user} key={user.id} imageWidth={imageWidth}></SearchList>)
      )}
    </div>
  );
}

export default searchBlock;
