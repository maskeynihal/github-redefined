import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { UserInfo } from 'Components/user';
import { getUser } from 'Services/usersApi';
import { userActions } from 'Actions';

/**
 * User profile page.
 */
class Home extends Component {
  /**
   * @class
   * @param {Object} props
   */
  constructor(props) {
    super(props);
  }

  /**
   * Component Did mount.
   * Has user api call.
   */
  async componentDidMount() {
    const userData = await getUser();

    this.props.setUser(userData);
  }

  /**
   * @returns {Component}
   */
  render() {
    return (
      <div>
        Home
        <div className="user__info">
          <UserInfo user={this.props.user}></UserInfo>
        </div>
      </div>
    );
  }
}

/**
 * Map state to prop.
 *
 * @param {Object} state
 */
function mapStateToProps(state) {
  return {
    user: state.user
  };
}

/**
 * Dispatch Action.
 *
 * @param {function} dispatch
 */
function mapDispatchToProps(dispatch) {
  return {
    setUser: (user) => dispatch(userActions.setUser(user))
  };
}

Home.propTypes = {
  user: PropTypes.object,
  setUser: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
