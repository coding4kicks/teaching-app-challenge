import React, { Component, PropTypes } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


class Details extends Component {

  constructor(props) {
    super(props);
  }

  parseDate(date) {
    const dateObj = new Date(date);
    const month = dateObj.getMonth();
    const day = dateObj.getDay();
    const year = dateObj.getFullYear();
    const hours = dateObj.getHours();
    const minutes = dateObj.getMinutes();
    return 'Due on ' + month + '/' + day + '/' + year + ' at +' + hours + ':' + minutes;
  }

  render() {

    const headerStyle = {fontWeight: 400};

    if (!this.props.item) return (<div><h1>No Assignment Selected</h1></div>);

    return (
            <div>
              <h2 style={headerStyle}>Details</h2>
              <Card>
                <CardHeader
                  title={this.props.item.creator.first_name + ' ' + this.props.item.creator.last_name}
                  subtitle={this.props.item.creator.username}
                  avatar={this.props.item.creator.avatars.small}
                />
                <CardTitle title={this.props.item.title} subtitle={this.parseDate(this.props.item.due_at)} />
                <CardText>{this.props.item.description}</CardText>
                <CardActions>
                  <FlatButton label="Edit" />
                  <FlatButton label="Delete" />
                </CardActions>
              </Card>
            </div>
    );
  }
}

Details.contextTypes = {
  muiTheme: React.PropTypes.object.isRequired
};

export default Details;


