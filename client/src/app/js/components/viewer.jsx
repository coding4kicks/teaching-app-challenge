import React, { Component, PropTypes } from 'react';


class Viewer extends Component {

  constructor(props) {
    super(props);
  }

  selectAssignment(event) {
  }

  render() {

    const style = {padding: '16px', transition: 'margin .28s'};
    if (this.props.sidebar) {
      style.marginLeft = '256px';
    }
    return (
        <div style={style}>Test</div>
    );
  }
}

export default Viewer;


