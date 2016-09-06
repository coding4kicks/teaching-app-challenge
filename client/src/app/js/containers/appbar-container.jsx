import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { loginUser, logoutUser } from '../actions/users';
import { toggleSidebar } from '../actions/assignments';
import AppBar from 'material-ui/AppBar';

class AppBarContainer extends Component {
  handleLogin(event) {
    event.preventDefault();

    const username = this.refs.username.value;
    const password = this.refs.password.value;

    if (username.length !== 0 && password.length !== 0) {
      this.props.loginUser({username, password});
    } else {
      alert('Please fill out all fields');
    }
  }

  handleLogoutClick(event) {
    event.preventDefault();
    this.props.logoutUser();
  }

  toggleSidebar(event) {
    this.props.toggleSidebar();
  }

  render() {
    const {currentUser} = this.props;

    //if (currentUser) {
    //  return (
    //    <div className="row">
    //      <div className="twelve columns">
    //        <div className="u-pull-right">
    //          Logged in as <strong>{currentUser.username}</strong> ● <Link to="profile">Edit Profile</Link> ● <a href="#" onClick={this.handleLogoutClick.bind(this)}>Logout</a>
    //        </div>
    //      </div>
    //    </div>
    //  )
    //}
    //
    //return (
    //  <div className="row">
    //    <div className="twelve columns">
    //      <form onSubmit={this.handleLogin.bind(this)}>
    //        <div className="four columns">
    //          <input type="text" className="u-full-width" placeholder="Username" ref="username" />
    //        </div>
    //        <div className="four columns">
    //          <input type="password" className="u-full-width" placeholder="Password" ref="password" />
    //        </div>
    //        <div className="four columns">
    //          <input type="submit" className="u-full-width button-primary" value="Login"/>
    //        </div>
    //      </form>
    //      <hr />
    //    </div>
    //  </div>
    //);

    return (
      <AppBar
        title="Teaching App"
        style={{position: 'fixed'}}
        iconClassNameRight="muidocs-icon-navigation-expand-more"
        onLeftIconButtonTouchTap={(e) => this.toggleSidebar(e)}
      />)
  }
}

const mapStateToProps = ({users: {currentUser}}) => ({currentUser});

export default connect(mapStateToProps, { loginUser, logoutUser, toggleSidebar })(AppBarContainer);
