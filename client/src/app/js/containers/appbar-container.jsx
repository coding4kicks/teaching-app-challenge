import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { loginUser, logoutUser } from '../actions/users';
import { toggleSidebar } from '../actions/assignments';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NewAssignment from '../components/new-assignment';

class AppBarContainer extends Component {

  state = {
    newAssignmentOpen: false,
  };

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

  newAssignment(event) {
    this.setState({newAssignmentOpen: true});
  }

  createAssignment(assignment) {
    console.log('create assignment');
    this.setState({newAssignmentOpen: false});
    // TODO: validate assignment fields and dispatch CREATE_ASSIGNMENT action
  }

  render() {
    const {currentUser} = this.props;

    return (
      <div>
        <AppBar
          title="Teaching App"
          style={{position: 'fixed'}}
          onLeftIconButtonTouchTap={(e) => this.toggleSidebar(e)}
          iconElementRight={
            <IconMenu
              iconButtonElement={
                <IconButton><MoreVertIcon /></IconButton>
              }
              targetOrigin={{horizontal: 'right', vertical: 'top'}}
              anchorOrigin={{horizontal: 'right', vertical: 'top'}}
            >
              <MenuItem primaryText="New Assignment" onClick={(e) => this.newAssignment()}/>
              <MenuItem primaryText="Sign out" />
            </IconMenu>
          }/>
        <NewAssignment open={this.state.newAssignmentOpen} onRequestClose={this.createAssignment.bind(this)}>

        </NewAssignment>
      </div>
    )
  }
}

const mapStateToProps = ({users: {currentUser}}) => ({currentUser});

export default connect(mapStateToProps, { loginUser, logoutUser, toggleSidebar })(AppBarContainer);
