import React from 'react';
import PropTypes from 'prop-types';
/**
 * Hoc for image
 * returns default image until image is loaded.
 *
 * @param {Component}Component
 */
function withImage(Component) {
  /**
   *@returns {Component}
   */
  function ImageComponent({ src, ...props }) {
    return <Component {...props}></Component>;
  }

  ImageComponent.propTypes = {
    src: PropTypes.string
  };

  return ImageComponent;
}

/**
 * Hoc for image
 * returns default image until image is loaded.
 */ export default withImage;
