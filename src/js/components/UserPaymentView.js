import React, { Component } from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import Subheader from 'material-ui/Subheader';

import PaperToolbar from './PaperToolbar';
import UserService from '../services/UserService';

class UserPaymentView extends Component {
    state = {
        payments: []
    };

    componentDidMount() {
        let userId = this.props.match.params.userId;
        new UserService().getUserPayments(userId, (response) => {
            let payments = response.map((payment) => {
                payment.key = payment.id;
                return payment;
            });
            this.setState({payments: payments});
        });
    }

    render() {
        let tableRows = this.state.payments.map((payment) => {
            return <TableRow key={payment.id}>
                <TableRowColumn>{payment.id}</TableRowColumn>
                <TableRowColumn>{payment.description}</TableRowColumn>
                <TableRowColumn>{payment.amount} {payment.user.currencyType}</TableRowColumn>
                <TableRowColumn>{payment.promotion ? payment.promotion.promotionName : 'NA'}</TableRowColumn>
                <TableRowColumn>{payment.createdTS}</TableRowColumn>
            </TableRow>

        });
        return (
            <div>
                <PaperToolbar title="PaymentsView" iconClassName="muidocs-icon-action-home"/>
                <Subheader>Payments of User : {this.state.payments.length>0 ? this.state.payments[0].user.firstName : 'NA'}</Subheader>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderColumn>ID</TableHeaderColumn>
                            <TableHeaderColumn>Description</TableHeaderColumn>
                            <TableHeaderColumn>Amount</TableHeaderColumn>
                            <TableHeaderColumn>Promotions Applied</TableHeaderColumn>
                            <TableHeaderColumn>Payment Date</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {tableRows}
                    </TableBody>
                </Table>
            </div>
        );
    }
}


export default UserPaymentView;