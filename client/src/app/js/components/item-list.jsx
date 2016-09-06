import React, { Component, PropTypes } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


class ItemList extends Component {

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
    return 'Submitted on ' + month + '/' + day + '/' + year + ' at ' + hours + ':' + minutes;
  }

  renderCard(item) {

    return (
      <Card key={item.id}
            style={{margin: "16px 0"}}>
        <CardHeader
          title={item.creator.first_name + ' ' + item.creator.last_name}
          subtitle={item.creator.username}
          avatar={item.creator.avatars.small}
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardTitle title={this.parseDate(item.submitted_at)} subtitle="Card subtitle" expandable={true} />
        <CardText expandable={true}>
          {item.content}
        </CardText>
        <CardActions>
          <FlatButton label="Grade" />
          <FlatButton label="Message" />
        </CardActions>
      </Card>
    )
  }

  renderCards() {
    const cards = this.props.items.map((item) => this.renderCard(item));
    return cards;
  }

  render() {

    const headerStyle = {fontWeight: 400};

    if (this.props.items.length < 1) return (<div><h1>No Submissions for Assignment</h1></div>);

    return (
      <div>
        <h2 style={headerStyle}>Submissions</h2>
        {this.renderCards()}
      </div>
    );
  }
}

ItemList.contextTypes = {
  muiTheme: React.PropTypes.object.isRequired
};

export default ItemList;


