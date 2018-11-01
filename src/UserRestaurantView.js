import React from 'react';
import logo from './logo.svg';
import './UserView.css';

class UserRestaurantView extends React.Component {
    constructor() {
        super();

        this.state = {};
    }

    componentDidMount() {
        fetch("/restaurants").then(user => {
            this.state.user = user;
        }).catch(err => {

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

export default UserRestaurantView;
