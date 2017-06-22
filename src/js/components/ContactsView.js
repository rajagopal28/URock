import React, { Component } from 'react';
import ImageTagFaces from 'material-ui/svg-icons/image/tag-faces';

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
                    return user;
                })
            });
        });
    }

    render() {
        let cardsList = this.state.users.map((user, index) => {
            return <ContactItem key={user.id} name={user.name} description={user.city} id={user.id} email={user.username}/>
        });
        return (
            <div>
                <PaperToolbar title="Users" iconElement={<ImageTagFaces/>}/>
                <div className="inner-padding">{cardsList} </div>
            </div>
        );
    }
}


export default ContactsView;
