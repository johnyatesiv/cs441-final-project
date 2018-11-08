import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import UserView from "./User/UserView";
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

  mutateState(key, value) {
    let update = {};
    update[key] = value;
    this.setState(update);
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

  openRestaurantView() {
    this.closeOrderView();
    this.closeMenu();

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
    this.closeMenu();

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
                (
                  <div style={{width: "100vw", height: "100vh"}}>
                    <img style={{width: "75vw", height: "75vh", marginLeft: "10vw"}} src="/foodapp_logo.png" alt="Foodapp Logo" />
                  </div>
                )
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
