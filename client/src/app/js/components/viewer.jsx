import React, { Component, PropTypes } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
import Details from './details';


class Viewer extends Component {

  constructor(props) {
    super(props);
  }

  selectAssignment(event) {
  }

  render() {
    const viewerStyle = {padding: '16px', transition: 'margin .28s'};
    if (this.props.sidebar) {
      viewerStyle.marginLeft = '256px';
    }

    const tabStyle = {
      backgroundColor: this.context.muiTheme.palette.primary2Color
    };

    const headerStyle = {fontWeight: 400};

    return (
        <div style={viewerStyle}>
          <Tabs>
            <Tab label="Details" style={tabStyle}>
              <Details item={this.props.item}></Details>
            </Tab>
            <Tab label="Submissions" style={tabStyle}>
              <div>
                <h2 style={headerStyle}>Submissions</h2>
                <p>
                  This is another example tab.
                </p>
              </div>
            </Tab>
          </Tabs>
        </div>
    );
  }
}

Viewer.contextTypes = {
  muiTheme: React.PropTypes.object.isRequired
};

export default Viewer;


