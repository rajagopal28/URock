import React, { Component } from 'react';
import {Card, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

import home_background from '../../images/home_background.png'
import kickbuttowski from '../../images/kickbuttowski.png'

import PaperToolbar from './PaperToolbar';

class HomeView extends Component {

    render() {
        return (
            <div>
                <PaperToolbar title="Home" iconClassName="muidocs-icon-action-home"/>
                <Card className="inner-padding">
                    <CardHeader
                        title="Welcome"
                        avatar={kickbuttowski}
                    />
                    <CardMedia>
                        <img src={home_background} alt="Home"/>
                    </CardMedia>
                    <CardTitle title="URock" subtitle="Redefining Customer rewards" />
                    <CardText>
                        This application is designed with an intend to redefine the traditional ways used by
                        banks to reward their customers on using their credit/debit cards linked to the bank account.
                        The idea is to <code>gamify</code> the customer payments and rewards points system so as to give personalised
                        promotions and rewards on their future payments
                    </CardText>
                </Card>
            </div>
        );
    }
}


export default HomeView;
