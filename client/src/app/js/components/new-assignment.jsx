import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


class NewAssignment extends React.Component {
  state = {
    open: false,
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.open) this.setState({open: true});
  }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
    // TODO: get state of fields
    const assignment = {};
    this.props.onRequestClose(assignment)
  };

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        disabled={true}
        onTouchTap={this.handleClose}
      />,
    ];

    return (
      <div>
        <RaisedButton label="Modal Dialog" onTouchTap={this.handleOpen} />
        <Dialog
          title="New Assignment"
          autoScrollBodyContent={true}
          actions={actions}
          modal={true}
          open={this.state.open}
        ><br />
        <TextField
          hintText=""
          floatingLabelText="Assignment Name"
          floatingLabelFixed={false}
          fullWidth={true}
        /><br />
        <TextField
          hintText=""
          floatingLabelText="Assignment Details"
          multiLine={true}
          rows={4}
          fullWidth={true}
        /><br />
        </Dialog>
      </div>
    );
  }
}

export default NewAssignment;