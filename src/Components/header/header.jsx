import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from 'logo.svg';
import { SearchList } from 'Components/searchList';
/**
 * Header of Application.
 */
export default class Header extends Component {
  /**
   * @class
   * @param {Object} props
   */
  constructor(props) {
    super(props);

    this.state = {
      users: [
        {
          name: 'Nihal Maskey',
          avatar_url: 'hello avatar'
        },
        {
          name: 'Next Username',
          avatar_url: 'nevermind'
        },
        {
          name: 'Nihal Maskey',
          avatar_url: 'hello avatar'
        },
        {
          name: 'Next Username',
          avatar_url: 'nevermind'
        },
        {
          name: 'Nihal Maskey',
          avatar_url: 'hello avatar'
        },
        {
          name: 'Next Username',
          avatar_url: 'nevermind'
        }
      ],
      searchText: '',
      isLoading: false
    };
  }

  handleSearch = (event) => {
    this.setState({
      ...this.state,
      searchText: event.target.value,
      isLoading: true
    });

    const users = this.getUsers(this.state.searchText);

    this.state.searchText &&
      setTimeout(() => {
        this.setState({
          ...this.state,
          users,
          isLoading: false
        });
      }, 1000);
  };

  getUsers = () => {
    return this.state.users;
  };

  paginateUsers = () => {
    const paginatedUser = this.state.users.filter(
      (user) => user.name.toLowerCase().includes(this.state.searchText.toLowerCase()) && this.state.searchText.length
    );

    return paginatedUser;
  };
  /**
   * @returns {Component}
   */
  render() {
    return (
      <div className="header">
        <div className="container header__container">
          <div className="logo__container">
            <Link to="/">
              <img src={logo} className="logo" alt="logo" />
            </Link>
          </div>
          <div className="search header__search">
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
                  this.paginateUsers().map((user) => <SearchList user={user}></SearchList>)
                )}
              </div>
            }
          </div>
        </div>
      </div>
    );
  }
}
