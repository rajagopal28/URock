import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
//import FontIcon from 'material-ui/FontIcon';
import ActionAndroid from 'material-ui/svg-icons/action/android';

class ContactItem extends Component {
    render() {
        return (
            <Card>
                <CardHeader
                  title={this.props.name}
                  subtitle={this.props.email}
                  actAsExpander={true}
                  showExpandableButton={true}
                />
                <CardActions>
                  <FlatButton label="Remove" icon={<ActionAndroid />} />
                </CardActions>
                <CardText expandable={true}>
                    {this.props.description}
                </CardText>
              </Card>
        );
    }
}


export default ContactItem;
