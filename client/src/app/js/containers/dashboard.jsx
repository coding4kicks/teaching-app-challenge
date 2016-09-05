import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../actions/users';
import { Link } from 'react-router';

class Dashboard extends Component {
  componentWillMount() {
    this.props.getUsers();
  }

  render() {
    const { users } = this.props;

    return (
      <div className="row">
      Test
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { users: state.users.all };
}

export default connect(mapStateToProps, { getUsers })(Dashboard);
