import React, { Component, PropTypes } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import FontIcon from 'material-ui/FontIcon';

class Sidebar extends Component {

  selectAssignment(event) {
  }

  render() {

    return (
      <Drawer open={true} containerStyle={{marginTop: '64px'}}>
        <IconButton tooltip="Font Icon">
          <FontIcon className="mi mi-face" />
        </IconButton>
        <MenuItem>Menu Item</MenuItem>
        <MenuItem>Menu Item 2</MenuItem>
      </Drawer>
    );
  }
}

export default Sidebar;


