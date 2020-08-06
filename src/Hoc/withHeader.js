import React from 'react';
import logo from 'logo.svg';
import { Link } from 'react-router-dom';
import Header from 'Components/header';
/**
 * HOC to provide container with Header.
 *
 * @returns {Component}
 * @param {Component} Component
 */
export default function withHeader(Component) {
  /**
   * @returns {Component}.
   * @param {Object} props
   */
  function headerComponent(props) {
    return (
      <div className="main-wrapper">
        <Header></Header>
        <div className="content">
          <div className="content__container">
            <Component {...props}></Component>
          </div>
        </div>
      </div>
    );
  }

  return headerComponent;
}
