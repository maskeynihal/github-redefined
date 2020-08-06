import React from 'react';
import PropTypes from 'prop-types';

/**
 * User Info.
 */
function UserInfo({ user }) {
  return (
    <div className="user-card card">
      <div className="card__image">
        <img src={user.avatar_url} alt="" />
      </div>
      <div className="card__text">
        <div className="user-card__info">
          <div className="user-card__name">
            <div className="user-card__username">{user.login}</div>
            <div className="user-card__profile-name">{user.name}</div>
          </div>
          <div className="user-card__type">{user.type}</div>
        </div>
        <div className="user-card__stats">
          <div className="stat-card">
            {user.public_repos} <span>Repos</span>
          </div>
          <div className="stat-card">
            {user.followers} <span>Followers</span>
          </div>
          <div className="stat-card">
            {user.following} <span>Following</span>
          </div>
        </div>
        <div className="user-card__bio">{user.bio}</div>
        <div className="user-card__tags">
          <div className="user-card__location">{user.location}</div>
        </div>
      </div>
    </div>
  );
}

UserInfo.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserInfo;
