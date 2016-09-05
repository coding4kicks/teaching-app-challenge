import React, { Component, PropTypes } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import FontIcon from 'material-ui/FontIcon';

class Sidebar extends Component {

  constructor(props) {
    super(props);
  }

  selectAssignment(event) {
  }

  render() {

    return (
      <Drawer open={this.props.show} containerStyle={{marginTop: '64px'}}>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
          <h3 style={{margin: '16px 8px 8px', fontWeight: 400}}>Assignments</h3>
        </div>
        <MenuItem>Menu Item</MenuItem>
        <MenuItem>Menu Item 2</MenuItem>
      </Drawer>
    );
  }
}

export default Sidebar;


