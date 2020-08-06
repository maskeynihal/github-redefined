import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Repo from 'Components/repo';
/**
 * User Repo.
 */
export default class UserRepo extends Component {
  /**
   * @class
   * @param {Object} props
   */
  constructor(props) {
    super(props);
  }

  /**
   * Paginate Repos.
   */
  paginateRepos() {
    const repos = Object.values(this.props.repos);

    return repos;
  }

  /**
   * Component did mount.
   */
  componentDidMount() {
    this.paginateRepos();
  }
  /**
   * @returns {Component} - Description.
   */
  render() {
    return (
      <div>
        <div className="heading">Repos</div>
        {this.paginateRepos().map((repo) => (
          <Repo key={repo.id} repo={repo}></Repo>
        ))}{' '}
      </div>
    );
  }
}

UserRepo.propType = {
  repos: PropTypes.object
};
