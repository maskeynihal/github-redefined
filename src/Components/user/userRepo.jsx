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
    this.state = {
      searchText: ''
    };
  }

  /**
   * Paginate Repos.
   */
  paginateRepos = () => {
    const repos = Object.values(this.props.repos);

    return repos.filter((repo) => repo.name.includes(this.state.searchText));
  };

  /**
   * Set search text.
   *
   * @param {Event} event
   */
  handleSearch = (event) => {
    console.log(event.target.value);
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
          <Repo key={repo.id} repo={repo}></Repo>
        ))}{' '}
      </div>
    );
  }
}

UserRepo.propType = {
  repos: PropTypes.object
};
