import React from 'react';
import './UserRestaurantView.css';
//import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
//import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
//import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';

class UserRestaurantView extends React.Component {
    constructor() {
        super();

        this.state = {
            restaurants: [
                {
                    name: "TEST 1",
                    description: "A nice burger place.",
                    image: "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&h=350"
                },
                {
                    name: "TEST 2",
                    description: "Your local taco shop!",
                    image: "http://tacoshop.biz/images/logo.png?crc=3828647610"
                }
            ]
        };
    }

    //componentDidMount() {
    //    fetch("/restaurants").then(restaurants => {
    //
    //        restaurants = [{name: "TEST 1"}, {name: "TEST 2"}];
    //
    //        this.setState({
    //            restaurants: restaurants
    //        })
    //    }).catch(err => {
    //        this.setState({
    //            error: true
    //        });
    //    });
    //}

    render() {
        return (
            <Grid
                className="UserRestaurantView"
                container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={40}
            >
                {
                    this.state.restaurants.map(restaurant => {
                        return <RestaurantSelection restaurant={restaurant}></RestaurantSelection>
                    })
                }
            </Grid>
        );
    }
}

class RestaurantSelection extends React.Component {
    constructor(props) {
        super();

        this.props = props;
        this.state = {};
    }

    render() {
        return (
            <Card className="RestaurantCard">
                <CardContent className="RestaurantCardContent">
                    {this.props.restaurant.name}
                    <br/>
                    <CardMedia
                        className="RestaurantCardMedia"
                        component="img"
                        image={this.props.restaurant.image}
                    />
                    <br/>
                    {this.props.restaurant.description}
                </CardContent>
                <CardActions></CardActions>
            </Card>
        )
    }
}

export default UserRestaurantView;
