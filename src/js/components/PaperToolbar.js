import React, { Component } from 'react';

import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';
import FontIcon from 'material-ui/FontIcon';


class PaperToolbar extends Component {
    render() {
        return ( <Toolbar>
            <ToolbarGroup>
                <FontIcon className={this.props.iconClassName}/>
                <ToolbarTitle text={this.props.title}/>
            </ToolbarGroup>
        </Toolbar>);
    }
}

export default PaperToolbar;