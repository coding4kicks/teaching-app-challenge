import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../actions/users';
import { getAssignments, selectAssignment, getSubmissions} from '../actions/assignments';
import { Link } from 'react-router';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Sidebar from '../components/sidebar';
import Viewer from '../components/viewer';


class Dashboard extends Component {
  componentWillMount() {
    this.props.getUsers();
    const assignmentId = this.props.params.id;
    this.props.getAssignments(assignmentId);
    if (assignmentId) this.props.selectAssignment(this.props.params.id);
  }

  componentWillReceiveProps(nextProps) {
    const newId = nextProps.params.id;
    const currId = this.props.currentAssignment;
    if (newId && currId && newId != currId)  this.props.selectAssignment(newId);
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

  getCurrentSubmissions() {
    if (!this.props.currentAssignment) return [];
    const submissions = this.props.submissions[this.props.currentAssignment];
    if (!submissions || submissions && submissions.length < 1) return [];
    return submissions;
  }
  render() {
    const { users } = this.props;

    return (
      <div style={{paddingTop: '64px'}}>
        <Sidebar show={this.props.sidebar}
                 items={this.props.assignments}
                 itemClick={this.props.selectAssignment}>

        </Sidebar>
        <Viewer sidebar={this.props.sidebar}
                item={this.getCurrentAssignment()}
                items={this.getCurrentSubmissions()}>
        </Viewer>
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
    currentAssignment: state.assignments.currentAssignment,
    submissions: state.assignments.submissions
  };
}

export default connect(mapStateToProps, { getUsers, getAssignments, selectAssignment, getSubmissions })(Dashboard);
