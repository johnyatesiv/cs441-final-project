import React from 'react';
import './UserView.css';
import GridList from '@material-ui/core/GridList';
import UserRestaurantView from "./UserRestaurantView";

class UserView extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {
        fetch("/user").then(user => {
            if(!user.error) {
                this.setState({
                    user: user
                });
            } else {
                this.setState({
                    error: true
                });
            }
        }).catch(err => {
            this.setState({
                error: true
            });
        });
    }

    render() {
        return (
            <UserRestaurantView user={this.state.user} />
        );
    }
}

export default UserView;
