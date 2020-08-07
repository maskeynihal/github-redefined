import React from 'react';

import { SearchList } from 'Components/searchList';
/**
 * Search Modal which contains search List.
 */
function searchBlock({ isLoading, users }) {
  return (
    <div>
      {isLoading ? <div> Loading </div> : users.map((user) => <SearchList user={user} key={user.id}></SearchList>)}
    </div>
  );
}

export default searchBlock;
