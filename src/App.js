import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import UserView from "./User/UserView";
import OrderView from "./Order/OrderView";
import Grid from '@material-ui/core/Grid';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import { Fastfood, Restaurant, ExitToApp, MoreVert } from '@material-ui/icons';

class App extends Component {
  constructor() {
    super();

    this.state = {
      menuOpen: false
    };

    //this.handleMenuOpen.bind(this);
    this.handleMenuOpen = () => {
      this.setState({
        menuOpen: !this.state.menuOpen
      });

      alert("AppComp "+ this.state.menuOpen);
    };
  }

  render() {
    return (
      <div className="App">
          <Grid container className="AppGrid">
            <IconButton
                onClick={this.handleMenuOpen}
                styles={{marginBottom: "5%"}}
            >
              <MoreVert />
            </IconButton>
            <MainMenu open={this.state.menuOpen} />
            <UserView/>
            <OrderView/>
          </Grid>
      </div>
    );
  }
}

class MainMenu extends React.Component {
  constructor(props) {
    super();
    this.state = {
      open: props.open
    };

    this.props = props;
  }

  render() {
    alert("MenuComp "+ this.props.open);
    return (
        <Menu open={this.props.open}>
          <MenuItem className="UserMenuItem">
            <Restaurant></Restaurant>
          </MenuItem>
          <MenuItem className="UserMenuItem">
            <Fastfood></Fastfood>
          </MenuItem>
          <MenuItem className="UserMenuItem">
            <ExitToApp></ExitToApp>
          </MenuItem>
        </Menu>
    )
  }
}

export default App;
