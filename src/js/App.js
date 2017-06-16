import React, { Component } from 'react';

import ContactsView from './components/ContactsView'
import './../css/App.css';
import AppBar from 'material-ui/AppBar';

import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

class App extends Component {
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
                <ContactsView/>

            </div>
        );
    }
}

App.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};

export default App;
