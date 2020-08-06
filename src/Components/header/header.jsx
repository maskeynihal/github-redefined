import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from 'logo.svg';
/**
 * Header of Application.
 */
export default class Header extends Component {
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
            <input type="text" className="search__input" placeholder="Enter username" />
          </div>
        </div>
      </div>
    );
  }
}
