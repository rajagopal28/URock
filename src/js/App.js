import React, { Component } from 'react';
import { hashHistory } from 'react-router'
import { HashRouter as Router, Route, Redirect } from 'react-router-dom'

import UserPaymentView from './components/UserPaymentView'
import HomeView from './components/HomeView'
import ContactsView from './components/ContactsView'
import GlobalLeaderBoard from './components/GlobalLeaderBoard'
import Navigation from './components/Navigation'

import './../css/App.css';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

class App extends Component {
    getChildContext() {
        return {muiTheme: getMuiTheme(baseTheme)};
    }

    render() {
        return (
            <div>
                <Router history={hashHistory}>
                    <Navigation>
                        <Route path="/home" component={HomeView}/>
                        <Route path="/users" component={ContactsView}/>
                        <Route path="/payments/:userId" component={UserPaymentView}/>
                        <Route path="/global-rewards" component={GlobalLeaderBoard}/>
                        <Redirect from="/" to="/home" />
                    </Navigation>
                </Router>

            </div>
        );
    }
}

App.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired
};

export default App;
