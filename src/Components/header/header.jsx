import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from 'logo.svg';
import SearchUsers from '../searchUsers';
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
  }
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
            <SearchUsers></SearchUsers>
          </div>
        </div>
      </div>
    );
  }
}
