import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


import Header from './Header';

const mapStateToProps = (state) => ({
    appName: state.appName
});

class App extends React.Component { 
  render() {
    return (
      <div>
        <Header appName={this.props.appName} />
        {this.props.children}
      </div>
    );
  }
}

App.contextTypes = {
  router: PropTypes.object.isRequired
};

export default connect(mapStateToProps, () => ({}))(App);
