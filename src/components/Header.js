import React from 'react';
import { Link } from 'react-router';

const LoggedInView = (props) => {
  if (props.currentUser) {
    return (
      <ul className="nav navbar-nav pull-xs-right">

        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>

        <li className="nav-item">
          <Link to="editor" className="nav-link">
            <ion className="ion-compose" />&nbsp;New Post
          </Link>
        </li>
        
        <li className="nav-item">
          <Link to="settings" className="nav-link">
            <ion className="ion-gear-a" />&nbsp;Settings
          </Link>
        </li>
        
        <li className="nav-item">
          <Link to={`@${props.currentUser.username}`} className="nav-link">
            <img src={props.currentUser.image} className="user-pic"/>
            {props.currentUser.username}
          </Link>
        </li>

      </ul>
    );
  }

  return null;
};

const LoggedOutView = (props) => {
  if (!props.currentUser) {
    return (
      <ul className="nav navbar-nav pull-xs-right">

        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        
        <li className="nav-item">
          <Link to="login" className="nav-link">
            Sign In
          </Link>
        </li>
        
        <li className="nav-item">
          <Link to="register" className="nav-link">
            Sign Up
          </Link>
        </li>
        
      </ul>
    );
  }

  return null;
};

class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-light">
        <div className="container">
          
          <Link className="navbar-brand">
            {this.props.appName.toLowerCase()}
          </Link>

          <LoggedOutView currentUser={this.props.currentUser} />
          
          <LoggedInView currentUser={this.props.currentUser} />
          
        </div>
      </nav>
    );
  }
}

export default Header;