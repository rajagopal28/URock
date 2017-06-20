import React, { Component } from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';

import PaperToolbar from './PaperToolbar';
import Subheader from 'material-ui/Subheader';
import PromotionDialog from './PromotionDialog';
import UserService from '../services/UserService';

class UserPaymentView extends Component {
    state = {
        payments: [],
        displayedPromotion: null
    };

    showPromotionsDialog(promotion) {
        this.setState({ displayedPromotion: promotion});
    }

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
            let promotionElement = null;
            if (payment.promotion) {
                promotionElement = <RaisedButton label="View" primary={true}
                                                 onTouchTap={() => this.showPromotionsDialog(payment.promotion) }/>;
            } else {
                promotionElement = 'NA';
            }
            return <TableRow key={payment.id}>
                <TableRowColumn>{payment.id}</TableRowColumn>
                <TableRowColumn>{payment.description}</TableRowColumn>
                <TableRowColumn>{payment.amount} {payment.user.currencyType}</TableRowColumn>
                <TableRowColumn>{payment.createdTS}</TableRowColumn>
                <TableRowColumn>
                    {promotionElement}
                </TableRowColumn>
            </TableRow>

        });

        let promotion = {};
        let show = false;
        if(this.state.displayedPromotion) {
            show = true;
            promotion = this.state.displayedPromotion;
            promotion.time = new Date().getTime();
        }
        return (

            <div>
                <PaperToolbar title="PaymentsView" iconClassName="muidocs-icon-action-home"/>
                <Subheader>Payments of User
                    : {this.state.payments.length > 0 ? this.state.payments[0].user.firstName : 'NA'}</Subheader>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderColumn>ID</TableHeaderColumn>
                            <TableHeaderColumn>Description</TableHeaderColumn>
                            <TableHeaderColumn>Amount</TableHeaderColumn>
                            <TableHeaderColumn>Payment Date</TableHeaderColumn>
                            <TableHeaderColumn>Promotions Applied</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {tableRows}
                    </TableBody>
                </Table>
                <PromotionDialog show={show} promotion={promotion}/>
            </div>
        );
    }
}


export default UserPaymentView;