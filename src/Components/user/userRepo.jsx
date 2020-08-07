import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Repo from 'Components/repo';
import withLoading from 'Hoc/withLoading';

const EnhancedRepo = withLoading(Repo);
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
    this.state = {
      searchText: ''
    };
  }

  /**
   * Paginate Repos.
   */
  paginateRepos = () => {
    const repos = Object.values(this.props.repos);
    if (!repos) {
      return [];
    }
    return repos.filter((repo) => repo.name.includes(this.state.searchText));
  };

  /**
   * Set search text.
   *
   * @param {Event} event
   */
  handleSearch = (event) => {
    this.setState({
      ...this.state,
      searchText: event.target.value
    });
  };

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
        <div className="row repo__row">
          <div className="heading">Repos</div>
          <div className="search repo__search">
            <input type="text" placeholder="Search Repo" value={this.state.searchText} onChange={this.handleSearch} />
          </div>
        </div>
        {this.paginateRepos().map((repo) => (
          <EnhancedRepo
            isLoading={this.props.isLoading}
            hasError={this.props.hasError}
            key={repo.id}
            repo={repo}
          ></EnhancedRepo>
        ))}{' '}
      </div>
    );
  }
}

UserRepo.propType = {
  repos: PropTypes.object
};
