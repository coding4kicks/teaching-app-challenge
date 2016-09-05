import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../actions/users';
import { getAssignments, selectAssignment} from '../actions/assignments';
import { Link } from 'react-router';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Sidebar from '../components/sidebar';
import Viewer from '../components/viewer';


class Dashboard extends Component {
  componentWillMount() {
    this.props.getUsers();
    this.props.getAssignments();
  }

  getChildContext() {
    return {muiTheme: getMuiTheme(baseTheme)};
  }

  getCurrentAssignment() {
    if (this.props.assignments.length < 1) return null;
    if (!this.props.currentAssignment) return null;
    const arr = this.props.assignments.filter((assignment) => assignment.id == this.props.currentAssignment);
    if (arr.length < 1) return null;
    return arr[0];
  }

  render() {
    const { users } = this.props;

    return (
      <div className="row">
        <Sidebar show={this.props.sidebar} items={this.props.assignments} itemClick={this.props.selectAssignment}></Sidebar>
        <Viewer sidebar={this.props.sidebar} item={this.getCurrentAssignment()}></Viewer>
      </div>
    );
  }
}

Dashboard.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    users: state.users.all,
    sidebar: state.assignments.sidebar,
    assignments: state.assignments.assignments,
    currentAssignment: state.assignments.currentAssignment
  };
}

export default connect(mapStateToProps, { getUsers, getAssignments, selectAssignment })(Dashboard);
