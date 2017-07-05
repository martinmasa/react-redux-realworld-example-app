import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import agent from '../agent';

import { Profile, mapStateToProps } from './Profile';

const mapDispatchToProps = (dispatch) => ({
  onFollow: (username) => dispatch({ 
      type: 'FOLLOW_USER', 
      payload: agent.Profile.follow(username)
    }),
  onLoad: (payload) => 
    dispatch({ type: 'PROFILE_FAVORITES_PAGE_LOADED', payload }),
  onUnfollow: (username) => dispatch({ 
      type: 'UNFOLLOW_USER',
      payload: agent.Profile.unfollow(username)
    }),
  onUnload: (payload) => 
    dispatch({ type: 'PROFILE_FAVORITES_PAGE_UNLOADED', payload })
});

class ProfileFavorites extends Profile {
  componentWillMount() {
    this.props.onLoad(Promise.all([
      agent.Profile.get(this.props.params.username),
      agent.Articles.favoritedBy(this.props.params.username)
    ]));
  }

  componentWillUnmount() {
    this.props.onUnload();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.params.username !== nextProps.params.username) {
      this.props.onLoad(Promise.all([
        agent.Profile.get(nextProps.params.username),
        agent.Articles.favoritedBy(nextProps.params.username)
      ]));
    }    
  }

  renderTabs() {
    return (
      <ul className="nav nav-pills outline-active">
        <li className="nav-item">
          <Link 
            className="nav-link"
            to={`@${this.props.profile.username}`}>
            My Articles
          </Link>
        </li>

        <li className="nav-item">
          <Link
            to={`@${this.props.profile.username}/favorites`}
            className="nav-link active">
            Favorited Articles
          </Link>
        </li>
      </ul>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileFavorites);