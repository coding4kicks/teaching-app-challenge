import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../actions/users';
import { Link } from 'react-router';
import Sidebar from '../components/sidebar';

class Dashboard extends Component {
  componentWillMount() {
    this.props.getUsers();
  }

  render() {
    const { users } = this.props;

    return (
      <div className="row">
        <Sidebar show={this.props.sidebar}></Sidebar>
        Test
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users.all,
    sidebar: state.assignments.sidebar
  };
}

export default connect(mapStateToProps, { getUsers })(Dashboard);
