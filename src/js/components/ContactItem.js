import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Divider from 'material-ui/Divider';

import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import ActionCardGiftcard from 'material-ui/svg-icons/action/card-giftcard';
import { blue500 } from 'material-ui/styles/colors';

class ContactItem extends Component {
    render() {
        return (
            <div>
                <Card>
                    <CardHeader
                        title={this.props.name}
                        subtitle={this.props.email}
                        actAsExpander={true}
                        showExpandableButton={true}
                    />
                    <CardActions>
                        <FlatButton label="View Payments" containerElement={<Link to={'/payments/'+this.props.id} />}
                                    icon={<ActionCardGiftcard color={blue500} />}/>
                    </CardActions>
                    <CardText expandable={true}>
                        {this.props.description}
                    </CardText>
                </Card>
                <Divider />
            </div>
        );
    }
}


export default ContactItem;
