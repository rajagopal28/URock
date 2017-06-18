import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Drawer from 'material-ui/Drawer';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Paper from 'material-ui/Paper';

import NavigationClose from 'material-ui/svg-icons/navigation/close';
import ActionHome from 'material-ui/svg-icons/action/home';
import ImageTagFaces from 'material-ui/svg-icons/image/tag-faces';
import HardwareVideogameAsset from 'material-ui/svg-icons/hardware/videogame-asset';
import Divider from 'material-ui/Divider';
import MapsLocalOffer from 'material-ui/svg-icons/maps/local-offer';
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
                                  leftIcon={<ActionHome />}/>
                        <MenuItem primaryText="Users" containerElement={<Link to="/users" />}  leftIcon={<ImageTagFaces />}/>
                        <MenuItem primaryText="Leadership Board" containerElement={<Link to="/global-rewards" />}  leftIcon={<HardwareVideogameAsset />}/>
                        <Divider />
                        <MenuItem primaryText="Promotions"  containerElement={<Link to="/promotions" />}  leftIcon={<MapsLocalOffer />}/>
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
