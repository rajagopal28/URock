import React, { Component } from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import Dialog from 'material-ui/Dialog';
import Subheader from 'material-ui/Subheader';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

import PaperToolbar from './PaperToolbar';
import UserService from '../services/UserService';

class UserPaymentView extends Component {
    state = {
        payments: [],
        showDialog: false,
        displayedPromotion: null
    };

    showPromotionsDialog(promotion) {
        this.setState({showDialog: true, displayedPromotion: promotion});
    }

    hidePromotionsDialog = () => {
        this.setState({showDialog: false, displayedPromotion: null});
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
                <TableRowColumn>
                    {promotionElement}
                </TableRowColumn>
                <TableRowColumn>{payment.createdTS}</TableRowColumn>
            </TableRow>

        });
        let actions = [
            <FlatButton
                label="Ok"
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.hidePromotionsDialog}
            />];
        let promotion = {
            promotionName : 'NA',
            rewardFactor : 'NA',
            discount: 'NA'
        };
        if(this.state.displayedPromotion) {
            promotion = this.state.displayedPromotion;
            promotion.rewadFactor = this.state.displayedPromotion.rewardMultiplier + 'X' ;
            promotion.discount = (this.state.displayedPromotion.discount * 100) + '%' ;
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
                            <TableHeaderColumn>Promotions Applied</TableHeaderColumn>
                            <TableHeaderColumn>Payment Date</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {tableRows}
                    </TableBody>
                </Table>
                <Dialog
                    title="Promotion Details"
                    actions={actions}
                    modal={false}
                    open={this.state.showDialog}
                    onRequestClose={this.hidePromotionsDialog}
                >
                    <Subheader><b>Name:</b>{promotion.promotionName}</Subheader>
                    <Subheader><b>Reward factor:</b>{promotion.rewadFactor}</Subheader>
                    <Subheader><b>Discount:</b>{promotion.discount}</Subheader>
                </Dialog>
            </div>
        );
    }
}


export default UserPaymentView;