import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import FontIcon from 'material-ui/FontIcon';

class Sidebar extends Component {

  constructor(props) {
    super(props);
  }

  parseDate(date) {
    const dateObj = new Date(date);
    const month = dateObj.getMonth();
    const day = dateObj.getDay();
    return month + '/' + day;
  }

  renderMenuItems() {
    const items = [];
    this.props.items.forEach((item) => {
      const menuItem = (
        <Link key={item.id}
              to={"/assignments/" + item.id}
              style={{textDecoration: 'none'}}>
          <MenuItem primaryText={item.title}
                    secondaryText={this.parseDate(item.due_at)}
                    onClick={(e) => this.props.itemClick(item.id)}>
          </MenuItem>
        </Link>
      );
      items.push(menuItem);
    });
    return items;
  }

  render() {

    return (
      <Drawer open={this.props.show} containerStyle={{marginTop: '64px'}}>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
          <h3 style={{margin: '16px 8px 8px', fontWeight: 400}}>Assignments</h3>
        </div>
        {this.renderMenuItems()}
      </Drawer>
    );
  }
}

export default Sidebar;


