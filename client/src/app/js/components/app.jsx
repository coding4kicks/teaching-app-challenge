import React from 'react';
import { Component } from 'react';

import Error from './shared/error';
import AppBarContainer from '../containers/appbar-container'

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <AppBarContainer />
        <Error />
        {this.props.children}
      </div>
    );
  }
}
