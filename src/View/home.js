import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { UserInfo } from 'Components/user';
import { getUser } from 'Services/usersApi';
import { userActions } from 'Actions';
import withLoading from 'Hoc/withLoading';

const EnhancedUserInfo = withLoading(UserInfo);

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
    this.state = {
      isLoading: true,
      hasError: false
    };
  }

  /**
   * Component Did mount.
   * Has user api call.
   */
  async componentDidMount() {
    const userData = await getUser();

    if (userData.response && userData.response.status >= 400) {
      this.setState({
        ...this.state,
        hasError: true
      });
    }
    this.props.setUser(userData);

    this.setState({
      ...this.state,
      isLoading: false
    });
  }

  /**
   * @returns {Component}
   */
  render() {
    return (
      <div>
        <div className="user__info">
          <EnhancedUserInfo
            isLoading={this.state.isLoading}
            hasError={this.state.hasError}
            user={this.props.user}
          ></EnhancedUserInfo>
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
