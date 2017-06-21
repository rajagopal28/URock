import React, { Component } from 'react'
import Subheader from 'material-ui/Subheader';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton';
import Snackbar from 'material-ui/Snackbar';

import PaperToolbar from './PaperToolbar';
import UserService from '../services/UserService';

class AddPaymentView extends Component {
    state = {
        users: [],
        form: {
            userId: null,
            category: null,
            description: '',
            amount: 0
        },
        snackOpen: false,
        categories: []
    };

    handleFormSubmit = (event) => {
        console.log(this.state.form);
        new UserService().addPayment(this.state.form, (response)=> {
            console.log(response);
            if (response.id) {
                this.setState({
                    snackOpen: true
                });
            }
        })
    };

    handleCategoryChange = (e, key, data) => {
        let form = this.state.form;
        form.category = data;
        this.setState({form: form});
    };

    handleTextChange = (event) => {
        let form = this.state.form;
        form[event.target.id] = event.target.value;
        this.setState({form: form});
    };

    handleUserChange = (e, key, data) => {
        let form = this.state.form;
        form.userId = data;
        this.setState({form: form});
    };

    handleSnackClose = () => {
        this.setState({
            snackOpen: false
        });
    };

    componentDidMount() {
        if (this.props.match.params.userId) {
            let form = this.state.form;
            form.userId = this.props.match.params.userId;
            this.setState({form: form});
        }

        let _self = this;
        new UserService().getUsers((response) => {
            let users = response.map((user) => {
                user.name = user.firstName + ' ' + user.lastName;
                return user;
            });

            var state = {users: users, form: this.state.form};
            if (!this.state.userId && response.length > 0) {
                state.form.userId = response[0].id;
            }
            _self.setState(state);
        });
        new UserService().getCategories((response) => {
            var state = {categories: response, form: this.state.form};
            if (!this.state.category) {
                state.form.category = response[0];
            }
            _self.setState(state);
        });
    }

    render() {

        const style = {
            margin: 12
        };

        let userMenuItems = this.state.users.map((user, index) => {
            return <MenuItem key={index} value={user.id} primaryText={user.name}/>
        });
        let categoryMenuItems = this.state.categories.map((category, index) => {
            return <MenuItem key={index} value={category} primaryText={category}/>
        });
        return ( <div>
            <PaperToolbar title="Add payment" iconClassName="material-icons"/>
            <div className="inner-padding" style={style}>
                <Subheader>Add payment for a user</Subheader>
                <SelectField
                    floatingLabelText="User"
                    value={this.state.form.userId}
                    onChange={this.handleUserChange}>
                    {userMenuItems}
                </SelectField> &nbsp;
                <SelectField
                    floatingLabelText="Category"
                    value={this.state.form.category}
                    onChange={this.handleCategoryChange}>
                    {categoryMenuItems}
                </SelectField> <br/>
                <TextField
                    floatingLabelText="Payment Description"
                    value={this.state.form.description}
                    id="description"
                    onChange={this.handleTextChange}
                /> &nbsp;
                <TextField
                    value={this.state.form.amount}
                    floatingLabelText="Amount($)"
                    type="number"
                    id="amount"
                    onChange={this.handleTextChange}
                />
                <br/>
                <RaisedButton label="Submit" onTouchTap={this.handleFormSubmit} primary={true}/>
                <Snackbar
                    open={this.state.snackOpen}
                    message="Payment Added successfully!!"
                    autoHideDuration={4000}
                    onRequestClose={this.handleSnackClose}
                />
            </div>
        </div>);
    }
}

export default AddPaymentView;