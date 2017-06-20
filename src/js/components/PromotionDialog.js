import React, { Component } from 'react'

import Dialog from 'material-ui/Dialog';
import Subheader from 'material-ui/Subheader';
import FlatButton from 'material-ui/FlatButton';

class PromotionDialog extends Component {
    state = {
        showDialog: false,
        displayedPromotion: {
            promotionName: 'NA',
            rewardFactor: 'NA',
            discount: 'NA'
        }
    };

    componentWillReceiveProps(nextProps) {
        let promotion = {};
        if (nextProps.promotion) {
            promotion.promotionName = nextProps.promotion.promotionName;
            promotion.rewadFactor = nextProps.promotion.rewardMultiplier + 'X';
            promotion.discount = (nextProps.promotion.discount * 100) + '%';
            this.setState({displayedPromotion: promotion, showDialog: nextProps.show});
        }
    }
    hidePromotionsDialog = () => {
        this.setState({showDialog: false});
    };

    render() {
        let promotion = this.state.displayedPromotion;
        let actions = [
            <FlatButton
                label="Ok"
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.hidePromotionsDialog}
            />];

        return (<Dialog
            title="Promotion Details"
            actions={actions}
            modal={false}
            open={this.state.showDialog}
            onRequestClose={this.hidePromotionsDialog}
        >
            <Subheader><b>Name:</b>{promotion.promotionName}</Subheader>
            <Subheader><b>Reward factor:</b>{promotion.rewadFactor}</Subheader>
            <Subheader><b>Discount:</b>{promotion.discount}</Subheader>
        </Dialog>);
    }
}

export default PromotionDialog;