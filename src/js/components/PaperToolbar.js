import React, { Component } from 'react';

import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';

class PaperToolbar extends Component {
    render() {
        return ( <Toolbar>
            <ToolbarGroup>
                {this.props.iconElement}
                <ToolbarTitle text={this.props.title}/>
            </ToolbarGroup>
        </Toolbar>);
    }
}

export default PaperToolbar;