import React, { Component } from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import Subheader from 'material-ui/Subheader';

import PaperToolbar from './PaperToolbar';
import UserService from '../services/UserService';

class GlobalLeaderBoard extends Component {
    state = {
        stats: []
    };

    componentDidMount() {
        new UserService().getCumulativeRewards((response) => {
            let stats = response.map((item) => {
                item.username = item.user.firstName + ' ' + item.user.lastName;
                return item;
            });
            this.setState({stats: stats});
        })
    }

    render() {
        let tableRows = this.state.stats.map((item) => {
            return <TableRow key={item.id}>
                <TableRowColumn>{item.username}</TableRowColumn>
                <TableRowColumn>{item.value}</TableRowColumn>
            </TableRow>

        });
        return (
            <div>
                <PaperToolbar title="Global Leadership Board" iconClassName="material-icons"/>
                <Subheader>Cumulative Reward points of all Users</Subheader>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderColumn>User</TableHeaderColumn>
                            <TableHeaderColumn>Value</TableHeaderColumn>
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

export default GlobalLeaderBoard;