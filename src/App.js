import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import UserView from "./User/UserView";
import OrderView from "./Order/OrderView";
import Grid from '@material-ui/core/Grid';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import { Fastfood, Restaurant, ExitToApp, MoreVert, Close } from '@material-ui/icons';

class App extends Component {
  constructor() {
    super();

    this.state = {
      menuOpen: false,
      restaurantViewOpen: false,
      orderViewOpen: false
    };
  }

  /**
   *
   */
  openMenu() {
    this.setState({
      menuOpen: true
    });
  }

  /**
   *
   */
  closeMenu() {
    this.setState({
      menuOpen: false
    })
  }

  mutateState(key, value) {
    let update = {};
    update[key] = value;
    this.setState(update);
  }

  openRestaurantView() {
    this.closeOrderView();

    this.setState({
      restaurantViewOpen: true
    });
  }

  closeRestaurantView() {
    this.setState({
      restaurantViewOpen: false
    });
  }

  openOrderView() {
    this.closeRestaurantView();

    this.setState({
      orderViewOpen: true
    });
  }

  closeOrderView() {
    this.setState({
      orderViewOpen: false
    });
  }

  noViewsOpen() {
    return !this.state.restaurantViewOpen && !this.state.orderViewOpen;
  }

  render() {
    return (
      <div className="App">
          <Grid container className="AppGrid">
            <IconButton
                onClick={this.openMenu.bind(this)}
                styles={{marginBottom: "5%"}}
            >
              <MoreVert />
            </IconButton>
            <br />
            <MainMenu
                open={this.state.menuOpen}
                close={this.closeMenu.bind(this)}
                openRestaurantView={this.openRestaurantView.bind(this)}
                openOrderView={this.openOrderView.bind(this)}
            />
            <br />
            {
              this.noViewsOpen() ?
                <img style={{width: "75vw", height: "75vh"}} src="/foodapp_logo.png" />
                : ""
            }
            <UserView
                mutateParentState={this.mutateState.bind(this)}
                restaurantViewOpen={this.state.restaurantViewOpen}
                orderViewOpen={this.state.restaurantViewOpen}
            />
          </Grid>
      </div>
    );
  }
}

class MainMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: props.open
    };
  }

  render() {
    return (
        <Menu open={this.props.open}>
          <MenuItem className="UserMenuItem" onClick={this.props.openRestaurantView}>
            <Restaurant></Restaurant>
          </MenuItem>
          <MenuItem className="UserMenuItem" onClick={this.props.openOrderView}>
            <Fastfood></Fastfood>
          </MenuItem>
          <MenuItem className="UserMenuItem" onClick={this.props.logout}>
            <ExitToApp></ExitToApp>
          </MenuItem>
          <MenuItem className="UserMenuItem" onClick={this.props.close}>
            <Close></Close>
          </MenuItem>
        </Menu>
    );
  }
}

export default App;
