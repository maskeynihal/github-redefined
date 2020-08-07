import React from 'react';

/**
 * Error Message.
 */
function Error({ message, ...props }) {
  return <div className="alert alert--danger">{message}</div>;
}

export default Error;
