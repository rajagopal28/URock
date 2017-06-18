import React, { Component } from 'react';
import Divider from 'material-ui/Divider';

import PaperToolbar from './PaperToolbar';
import ContactItem from './ContactItem';
import UserService from '../services/UserService';

class ContactsView extends Component {
    state = {
        users: []
    };

    componentDidMount() {
        let _self = this;
        new UserService().getUsers((response) => {
            _self.setState({
                users: response.map((user) => {
                    user.name = user.firstName + ' ' + user.lastName;
                    console.log(user);
                    return user;
                })
            });
        });
    }

    render() {
        let cardsList = this.state.users.map((user, index) => {
            return <div key={index}>
                <ContactItem key={user.id} name={user.name} description={user.city} id={user.id} email={user.username}/>
                <Divider />
            </div>
        });
        return (
            <div>
                <PaperToolbar title="ContactsView" iconClassName="muidocs-icon-action-home"/>
                {cardsList}
            </div>
        );
    }
}


export default ContactsView;
