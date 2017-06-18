import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Drawer from 'material-ui/Drawer';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Paper from 'material-ui/Paper';

import NavigationClose from 'material-ui/svg-icons/navigation/close';
import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import HardwareVideogameAsset from 'material-ui/svg-icons/hardware/videogame-asset';
import Divider from 'material-ui/Divider';
import ContentCopy from 'material-ui/svg-icons/content/content-copy';
import Download from 'material-ui/svg-icons/file/file-download';
import Delete from 'material-ui/svg-icons/action/delete';

class Navigation extends Component {
    state = {drawerOpen: false};
    toggleDrawer = () => {
        this.setState({drawerOpen: !this.state.drawerOpen})
    };

    render() {
        return (
            <div>
                <AppBar
                    title="URock"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    onLeftIconButtonTouchTap={this.toggleDrawer}
                />
                <Drawer open={this.state.drawerOpen}>
                    <AppBar
                        title="URock"
                        iconElementLeft={<IconButton><NavigationClose /></IconButton>}
                        onLeftIconButtonTouchTap={this.toggleDrawer}
                    />
                    <Menu onItemTouchTap={this.toggleDrawer}>
                        <MenuItem primaryText="Home" containerElement={<Link to="/home" />}
                                  leftIcon={<RemoveRedEye />}/>
                        <MenuItem primaryText="Users" containerElement={<Link to="/users" />}  leftIcon={<PersonAdd />}/>
                        <MenuItem primaryText="Leadership Board" containerElement={<Link to="/global-rewards" />}  leftIcon={<HardwareVideogameAsset />}/>
                        <Divider />
                        <MenuItem primaryText="Make a copy" leftIcon={<ContentCopy />}/>
                        <MenuItem primaryText="Download" leftIcon={<Download />}/>
                        <Divider />
                        <MenuItem primaryText="Remove" leftIcon={<Delete />}/>
                    </Menu>
                </Drawer>
                <div className="main-container">
                    <Paper zDepth={2}>
                        {this.props.children}
                    </Paper>
                </div>
            </div>
        );
    }
}


export default Navigation;
