import React, { Component } from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import Subheader from 'material-ui/Subheader';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import PaperToolbar from './PaperToolbar';
import UserService from '../services/UserService';

class GlobalLeaderBoard extends Component {
    state = {
        stats: [],
        selectedCategory: 'ALL',
        categories: []
    };

    componentDidMount() {
        new UserService().getCategories((response) => {
            this.setState({categories: response});
        });
        this.refreshData(this.state.selectedCategory);
    }

    refreshData = (category) => {
        let selectedCategory = category !== 'ALL'  ? category : '';
        new UserService().getCumulativeRewards(selectedCategory, (response) => {
            let stats = response.map((item) => {
                item.username = item.user.firstName + ' ' + item.user.lastName;
                return item;
            });
            this.setState({stats: stats});
        })
    };
    handleCategoryChange = (e, key, data) => {
        this.setState({selectedCategory: data});
        this.refreshData(data);
    };

    render() {
        let tableRows = this.state.stats.map((item) => {
            return <TableRow key={item.id}>
                <TableRowColumn>{item.username}</TableRowColumn>
                <TableRowColumn>{item.category ? item.category : 'NA'}</TableRowColumn>
                <TableRowColumn>{item.value}</TableRowColumn>
            </TableRow>

        });
        let menuItems = this.state.categories.map((category, index) => {
            return <MenuItem key={index} value={category} primaryText={category}/>
        });
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

export default GlobalLeaderBoard;