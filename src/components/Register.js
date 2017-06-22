import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import agent from '../agent';

import ListErrors from './ListErrors';

const mapStateToProps = (state) => ({ ...state.auth });

const mapDispatchToProps = (dispatch) => ({
  onChangeEmail: (value) => 
    dispatch({ type: 'UPDATE_FIELD_AUTH', key: 'email', value }),
  onChangePassword: (value) => 
    dispatch({ type: 'UPDATE_FIELD_AUTH', key: 'password', value }),
  onChangeUsername: (value) => 
    dispatch({ type: 'UPDATE_FIELD_AUTH', key: 'username', value }),
  onSubmit: (username, email, password) => 
    dispatch({ type: 'REGISTER', payload: agent.Auth.register(username, email, password) })
});

class Register extends React.Component {
  constructor(props) {
    super();
    this.changeEmail = (ev) => this.props.onChangeEmail(ev.target.value);
    this.changePassword = (ev) => this.props.onChangePassword(ev.target.value);
    this.changeUsername = (ev) => this.props.onChangeUsername(ev.target.value);
    this.submitForm = (username, email, password) => (ev) => {
      ev.preventDefault();
      this.props.onSubmit(username, email, password);
    } 
  }

  render() {
    const email = this.props.email;
    const password = this.props.password;
    const username = this.props.username;

    return (
      <div className="auth-page">
        <div className="container page">
          <div className="row">
            
            <div className="col-md-6 offset-md-3 col-xs-12">
              <h1 className="text-xs-center">Sign In</h1>
              <p className="text-xs-center">
                <Link to="login">Have an account?</Link>
              </p>

              <ListErrors errors={this.props.errors} />

              <form onSubmit={this.submitForm(username, email, password)}>
                <fieldset>

                  <fieldset className="form-group">
                    <input 
                      className="form-control form-control-lg" 
                      type="text"
                      onChange={this.changeUsername}
                      value={username}
                      placeholder="Username" />
                  </fieldset>

                  <fieldset className="form-group">
                    <input 
                      className="form-control form-control-lg" 
                      type="Email"
                      onChange={this.changeEmail}
                      value={email}
                      placeholder="Email" />
                  </fieldset>

                  <fieldset className="form-group">
                    <input 
                      className="form-control form-control-lg" 
                      type="password"
                      onChange={this.changePassword}
                      value={password}
                      placeholder="Password" />
                  </fieldset>

                  <br />
                  <button 
                    className="btn btn-lg btn-primary pull-xs-right"
                    type="submit"
                    disabled={this.props.inProgress}>
                    Sign In
                  </button>
                  
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);