import React from 'react';
import { Component } from 'react';

import Error from './shared/error';
import Appbar from '../containers/appbar.jsx'

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Appbar />
        <Error />
        {this.props.children}
      </div>
    );
  }
}
