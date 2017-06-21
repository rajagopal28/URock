import React, { Component } from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import Subheader from 'material-ui/Subheader';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

import PaperToolbar from './PaperToolbar';
import PromotionDialog from './PromotionDialog';
import UserService from '../services/UserService';

class GlobalLeaderBoard extends Component {
    state = {
        stats: [],
        selectedCategory: 'ALL',
        categories: [],
        displayedPromotion: null
    };

    showPromotionsDialog(promotion) {
        this.setState({ displayedPromotion: promotion});
    }

    componentDidMount() {
        new UserService().getCategories((response) => {
            this.setState({categories: response});
        });
        this.refreshData(this.state.selectedCategory);
    }

    refreshData = (category) => {
        new UserService().getCumulativeRewards(category, (response) => {
            let stats = response.map((item) => {
                item.username = item.user.firstName + ' ' + item.user.lastName;
                return item;
            });
            this.setState({stats: stats});
        })
    };
    handleCategoryChange = (e, key, data) => {
        this.setState({selectedCategory: data, displayedPromotion: null});
        this.refreshData(data);
    };

    render() {
        let tableRows = this.state.stats.map((item) => {
            let promotionElement = null;
            if (item.promotion) {
                promotionElement = <RaisedButton label="View" primary={true}
                                                 onTouchTap={() => this.showPromotionsDialog(item.promotion) }/>;
            } else {
                promotionElement = 'NA';
            }
            return <TableRow key={item.id}>
                <TableRowColumn>{item.username}</TableRowColumn>
                <TableRowColumn>{item.category}</TableRowColumn>
                <TableRowColumn>{item.value}</TableRowColumn>
                <TableRowColumn>{promotionElement}</TableRowColumn>
            </TableRow>

        });
        let menuItems = this.state.categories.map((category, index) => {
            return <MenuItem key={index} value={category} primaryText={category}/>
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
                <PaperToolbar title="Global Leadership Board" iconClassName="material-icons"/>
                <div className="inner-padding">
                    <Subheader>Cumulative Reward points of all Users</Subheader>
                    <SelectField
                        floatingLabelText="Category"
                        value={this.state.selectedCategory}
                        onChange={this.handleCategoryChange}>
                        <MenuItem value='ALL' primaryText="All"/>
                        {menuItems}
                    </SelectField>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHeaderColumn>User</TableHeaderColumn>
                                <TableHeaderColumn>Category</TableHeaderColumn>
                                <TableHeaderColumn>Value</TableHeaderColumn>
                                <TableHeaderColumn>Promotion Applicable</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {tableRows}
                        </TableBody>
                    </Table>
                    <PromotionDialog show={show} promotion={promotion}/>
                </div>
            </div>
        );
    }
}

export default GlobalLeaderBoard;