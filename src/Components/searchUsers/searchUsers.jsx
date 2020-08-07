import React, { Component } from 'react';

import { SearchBlock } from 'Components/searchList';
import { searchUsers } from '../../Services/usersApi';
import withLoading from 'Hoc/withLoading';

const EnhancedSearchBlock = withLoading(SearchBlock);
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
      isLoading: false,
      hasError: false
    };
  }

  handleSearch = async (event) => {
    this.setState(
      {
        ...this.state,
        searchText: event.target.value,
        isLoading: true,
        hasError: false
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
    if (users.response && users.response.status >= 400) {
      this.setState({
        hasError: true
      });
      return [];
    }
    return users.items;
  };

  paginateUsers = () => {
    if (!this.state.users && !this.state.users.length) {
      return [];
    } else {
      const paginatedUser = this.state.users.filter(
        (user) =>
          user.login?.toLowerCase().includes(this.state.searchText.toLowerCase()) && this.state.searchText.length
      );
      return paginatedUser;
    }
  };
  componentDidUpdate() {
    if (!this.state.searchText && this.state.hasError) {
      this.setState({
        ...this.state,
        hasError: false
      });
    }
  }
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
            <EnhancedSearchBlock
              isLoading={this.state.isLoading}
              hasError={this.state.hasError}
              errorMessage={'No User Found'}
              users={this.paginateUsers()}
              variant={'rect'}
              height={100}
            ></EnhancedSearchBlock>
          </div>
        }
      </div>
    );
  }
}
