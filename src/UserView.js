import React from 'react';
import logo from './logo.svg';
import './UserView.css';
import UserRestaurantView from "./UserRestaurantView";

class UserView extends React.Component {
    constructor() {
        super();

        this.state = {};
    }

    componentDidMount() {
        fetch("/user").then(user => {
            if(!user.error) {
                this.state.user = user;
            } else {
                this.state.error = true;
            }
        }).catch(err => {
            this.state.error = true;
        });
    }

    render() {
        return (
            <div className="UserView">
                <UserMenu open={false}></UserMenu>
                <UserRestaurantView user={this.state.user}></UserRestaurantView>
            </div>
        );
    }
}

class UserMenu extends React.Component {
    constructor(props) {
        this.state.open = this.props.open;
    }

    render() {
        return <div className="UserMenu"></div>
    }
}

export default UserView;
