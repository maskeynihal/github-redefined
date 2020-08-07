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
      isLoading: true,
      isUserProfileLoading: true,
      isUserRepoLoading: true
    };
  }

  /**
   * Component Did Mount. Call to get basic user info.
   */
  async componentDidMount() {
    const userData = await getUser(this.props.match.params.username);
    this.setState({
      isUserProfileLoading: false
    });
    this.props.setUser(userData);
    const userRepos = await getRepos(userData?.login || '');

    this.setState({
      isUserRepoLoading: false
    });
    this.props.setRepos(userRepos);

    this.setState({
      isLoading: false
    });
  }

  /**
   * @returns {Component}
   */
  render() {
    return (
      <div>
        {/* {this.state.isLoading && <div>Loading</div>} */}
        {/* {!this.state.isLoading && ( */}
        <div>
          <div className="user__info">
            <EnhancedUserInfo isLoading={this.state.isUserProfileLoading} user={this.props.user}></EnhancedUserInfo>
            {/* <UserInfo user={this.props.user}></UserInfo> */}
          </div>
          <div className="user__repos">
            <EnhancedUserRepo isLoading={this.state.isUserRepoLoading} repos={this.props.repos}></EnhancedUserRepo>
          </div>
        </div>
        {/* )} */}
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
