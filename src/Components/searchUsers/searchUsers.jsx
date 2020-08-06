import React, { Component } from 'react';

import { SearchList } from 'Components/searchList';
import logo from 'logo.svg';
import { searchUsers } from '../../Services/usersApi';

/**
 * Search User Component.
 */
export default class SearchUsers extends Component {
  /** @constructor */
  constructor() {
    super();
    this.state = {
      users: [],
      searchText: '',
      isLoading: false
    };
  }

  handleSearch = async (event) => {
    this.setState(
      {
        ...this.state,
        searchText: event.target.value,
        isLoading: true
      },
      async () => {
        const users = this.state.searchText ? await this.getUsers(this.state.searchText) : [];
        this.setState({
          ...this.state,
          users,
          isLoading: false
        });
      }
    );
  };

  getUsers = async (query) => {
    const users = await searchUsers(query);
    return users.items;
  };

  paginateUsers = () => {
    const paginatedUser = this.state.users.filter(
      (user) => user.login?.toLowerCase().includes(this.state.searchText.toLowerCase()) && this.state.searchText.length
    );

    return paginatedUser;
  };
  /**
   * @returns {Component}
   */
  render() {
    return (
      <div>
        <input
          type="text"
          className="search__input"
          placeholder="Enter username"
          value={this.state.searchText}
          onChange={this.handleSearch}
        />
        {
          <div className="modal search__modal">
            {this.state.isLoading ? (
              <div> Loading </div>
            ) : (
              this.paginateUsers().map((user) => <SearchList user={user} key={user.id}></SearchList>)
            )}
          </div>
        }
      </div>
    );
  }
}
