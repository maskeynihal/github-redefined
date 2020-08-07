import React from 'react';
import PropTypes from 'prop-types';
import { Skeleton } from '@material-ui/lab';
/**
 * HOC to provide Loading for component.
 *
 * @param {Component} Component
 */
function withLoading(Component) {
  /**
   * @param {Object} props
   */
  function loadingComponent({ isLoading, hasError, variant = 'rect', ...props }) {
    if (isLoading) {
      return <Skeleton animation="wave" variant={variant} />;
    }

    if (hasError) {
      return <div>Error Loading Data</div>;
    }

    return <Component {...props}></Component>;
  }

  loadingComponent.propTypes = {
    isLoading: PropTypes.bool,
    hasError: PropTypes.bool,
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    variant: PropTypes.string
  };

  return loadingComponent;
}

export default withLoading;
