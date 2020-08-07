import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Skeleton } from '@material-ui/lab';
import logo from 'logo.svg';

/**
 * Image Component.
 */
export default class Image extends Component {
  /** @class */
  constructor() {
    super();

    this.state = {
      isLoading: true,
      hasError: false
    };
  }

  handleImageLoad = () => {
    this.setState({
      ...this.state,
      isLoading: false
    });
  };

  handleImageError = () => {
    this.setState({
      ...this.state,
      hasError: true
    });
  };
  /**
   * Image Tag.
   */
  render() {
    return (
      <div>
        {this.state.isLoading && <Skeleton variant="rect" />}
        {/* <img
          src={logo}
          className="logo"
          alt="logo"
          style={{ display: this.state.isLoading ? 'inline-block' : 'none' }}
        /> */}
        <img
          src={this.props.src}
          alt={this.props.alt}
          {...this.props}
          onLoad={this.handleImageLoad}
          onError={this.handleImageError}
        />
      </div>
    );
  }
}
Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  props: PropTypes.object
};
