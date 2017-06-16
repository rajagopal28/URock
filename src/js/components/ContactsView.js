import React, { Component } from 'react';
import Divider from 'material-ui/Divider';

import ContactItem from './ContactItem'
import UserService from '../services/UserService'
class ContactsView extends Component {
    state = {
        users: []
    };

    componentDidMount() {
        let _self = this;
        new UserService().getUsers((response) => {
            _self.setState({users : response.map((user) => {
                user.key = user.id;
                user.name = user.firstName + ' ' + user.lastName;
                console.log(user);
                return user;
            })});
        });
    }

    render() {
        let cardsList = this.state.users.map((user, index) => {
                return <div key={index}>
                    <ContactItem key={user.id} name={user.name} description={user.city} email={user.username}/>
                    <Divider />
                </div>
            });
        return (
            <div>
                {cardsList}
            </div>
        );
    }
}


export default ContactsView;
