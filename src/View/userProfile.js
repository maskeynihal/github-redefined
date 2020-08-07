import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getUser, getRepos } from 'Services/usersApi';
import { userActions, repoActions } from 'Actions';
import { UserInfo, UserRepo } from 'Components/user';
import withLoading from 'Hoc/withLoading';

const EnhancedUserInfo = withLoading(UserInfo);
const EnhancedUserRepo = withLoading(UserRepo);

/**
 * User profile page.
 */
class UserProfile extends Component {
  /**
   * @class
   * @param {Object} props
   */
  constructor(props) {
    super(props);

    this.state = {
      currentUsername: props.match.params.username,
      username: props.match.params.username,
      isLoading: true,
      isUserProfileLoading: true,
      isUserRepoLoading: true,
      hasUserProfileError: false,
      hasUserRepoError: false,
      hasError: false
    };
  }

  /**
   * Component Did Mount. Call to get basic user info.
   */
  componentDidMount() {
    this.handleGetUser(this.props.match.params.username);
  }

  /**
   * Component Did update.
   */
  componentDidUpdate() {
    if (this.state.username !== this.state.currentUsername) {
      this.handleGetUserProfile(this.state.username);
      this.setState({
        ...this.state,
        currentUsername: this.state.username
      });
    }
  }

  /**
   * Get User Profile.
   *
   * @param {String} username
   */
  async handleGetUserProfile(username) {
    const userData = await getUser(username);

    if (userData.response && userData.response.status >= 400) {
      this.setState({
        ...this.state,
        hasUserProfileError: true
      });
    }

    this.setState({
      ...this.state,
      isUserProfileLoading: false
    });

    this.props.setUser(userData);
  }

  /**
   * Get user repo.
   *
   * @param {String} username
   */
  async handleGetUserRepo(username) {
    const userRepos = await getRepos(username);

    if (userRepos.response && userRepos.response.status >= 400) {
      this.setState({
        ...this.sate,
        hasUserRepoError: true
      });
    } else {
      this.setState({
        ...this.state,
        isUserRepoLoading: false
      });

      this.props.setRepos(userRepos);

      this.setState({
        ...this.state,
        isLoading: false
      });
    }
  }

  /**
   * Get User info.
   *
   * @param {String} username
   */
  handleGetUser(username) {
    this.setState({
      ...this.state,
      currentUsername: username
    });

    this.handleGetUserProfile(username);
    this.handleGetUserRepo(username);
  }

  static getDerivedStateFromProps(props, state) {
    if (props.match.params.username !== state.currentUsername) {
      return {
        ...state,
        username: props.match.params.username
      };
    }

    return null;
  }
  /**
   * @returns {Component}
   */
  render() {
    return (
      <div>
        <div>
          <div className="user__info">
            <EnhancedUserInfo
              isLoading={this.state.isUserProfileLoading}
              hasError={this.state.hasUserProfileError}
              user={this.props.user}
            ></EnhancedUserInfo>
          </div>
          <div className="user__repos">
            <EnhancedUserRepo
              isLoading={this.state.isUserRepoLoading}
              hasError={this.state.hasUserRepoError}
              repos={this.props.repos}
            ></EnhancedUserRepo>
          </div>
        </div>
      </div>
    );
  }
}

/**
 * Prop validation.
 */

UserProfile.propTypes = {
  user: PropTypes.object,
  repos: PropTypes.object,
  setUser: PropTypes.func,
  setRepos: PropTypes.func
};

/**
 * Map state to props.
 *
 * @param {Object} state
 */
function mapStateToProps(state) {
  return {
    user: state.user,
    repos: state.repos
  };
}

/**
 * Map dispatch props.
 *
 * @param {Object} dispatch
 */
function mapDispatchToProps(dispatch) {
  return {
    setUser: (user) => {
      dispatch(userActions.setUser(user));
    },
    setRepos: (repos) => {
      dispatch(repoActions.setRepos(repos));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
