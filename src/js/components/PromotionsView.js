import React, { Component } from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import Subheader from 'material-ui/Subheader';

import PaperToolbar from './PaperToolbar';
import UserService from '../services/UserService';

class PromotionsView extends Component {
    state = {
        promotions: []
    };

    componentDidMount() {
        new UserService().getPromotions((response) => {
            this.setState({promotions: response});
        })
    }

    render() {
        let tableRows = this.state.promotions.map((item) => {
            return <TableRow key={item.id}>
                <TableRowColumn>{item.id}</TableRowColumn>
                <TableRowColumn>{item.promotionName}</TableRowColumn>
                <TableRowColumn>{item.category}</TableRowColumn>
                <TableRowColumn>{item.rewardMultiplier}</TableRowColumn>
                <TableRowColumn>{item.discount}</TableRowColumn>
                <TableRowColumn>{item.lowerLimit}</TableRowColumn>
                <TableRowColumn>{item.upperLimit}</TableRowColumn>
                <TableRowColumn>{item.createdTS}</TableRowColumn>
            </TableRow>

        });
        return (
            <div>
                <PaperToolbar title="Global Leadership Board" iconClassName="material-icons"/>
                <div className="inner-padding">
                    <Subheader>All promotions on user payments</Subheader>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHeaderColumn>ID</TableHeaderColumn>
                                <TableHeaderColumn>Name</TableHeaderColumn>
                                <TableHeaderColumn>Category</TableHeaderColumn>
                                <TableHeaderColumn>Reward factor</TableHeaderColumn>
                                <TableHeaderColumn>Price discount</TableHeaderColumn>
                                <TableHeaderColumn>From(reward point value)</TableHeaderColumn>
                                <TableHeaderColumn>To(reward point value)</TableHeaderColumn>
                                <TableHeaderColumn>Valid from</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {tableRows}
                        </TableBody>
                    </Table>
                </div>
            </div>
        );
    }
}


export default PromotionsView;