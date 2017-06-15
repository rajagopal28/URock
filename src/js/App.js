import React, { Component } from 'react';

import ContactItem from './components/ContactItem'
import './../css/App.css';
import AppBar from 'material-ui/AppBar';

import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

class App extends Component {
    constructor(props) {
        super(props);
        this.contacts = [{
            key: 1,
            name: "James K Nelson",
            email: "james@jamesknelson.com",
            description: "Front-end Unicorn"
        },
            {
                key: 2, name: "Jim", email: "jim@example.com",
                description: "back-end Stag"
            },
            {
                key: 3, name: "Joe", email: "joe@samples.com",
                description: "Full stack Vulture"
            }]
    }

    getChildContext() {
        return {muiTheme: getMuiTheme(baseTheme)};
    }

    render() {
        return (
            <div>
                <AppBar
                    title="URock"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                />
                {this.contacts.map(function (contact, index) {
                    return <ContactItem key={index} name={contact.name} email={contact.email}/>;
                })}

            </div>
        );
    }
}

App.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};

export default App;
