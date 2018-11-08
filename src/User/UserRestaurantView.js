import React from 'react';
import './UserRestaurantView.css';
import Popover from '@material-ui/core/Popover';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
//import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
//import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import { Close } from '@material-ui/icons';

/** Other Views **/
import Menu from "../Menu/MenuView";

class UserRestaurantView extends React.Component {
    constructor() {
        super();

        this.state = {
            restaurants: [
                {
                    id: 1,
                    name: "TEST 1",
                    description: "A nice burger place.",
                    image: "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&h=350"
                },
                {
                    id: 2,
                    name: "TEST 2",
                    description: "Your local taco shop!",
                    image: "http://tacoshop.biz/images/logo.png?crc=3828647610"
                },
                {
                    id: 1,
                    name: "TEST 1",
                    description: "A nice burger place.",
                    image: "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&h=350"
                },
                {
                    id: 2,
                    name: "TEST 2",
                    description: "Your local taco shop!",
                    image: "http://tacoshop.biz/images/logo.png?crc=3828647610"
                },
                {
                    id: 1,
                    name: "TEST 1",
                    description: "A nice burger place.",
                    image: "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&h=350"
                },
                {
                    id: 2,
                    name: "TEST 2",
                    description: "Your local taco shop!",
                    image: "http://tacoshop.biz/images/logo.png?crc=3828647610"
                },
                {
                    id: 1,
                    name: "TEST 1",
                    description: "A nice burger place.",
                    image: "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&h=350"
                },
                {
                    id: 2,
                    name: "TEST 2",
                    description: "Your local taco shop!",
                    image: "http://tacoshop.biz/images/logo.png?crc=3828647610"
                },
                {
                    id: 1,
                    name: "TEST 1",
                    description: "A nice burger place.",
                    image: "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&h=350"
                },
                {
                    id: 2,
                    name: "TEST 2",
                    description: "Your local taco shop!",
                    image: "http://tacoshop.biz/images/logo.png?crc=3828647610"
                },
                {
                    id: 1,
                    name: "TEST 1",
                    description: "A nice burger place.",
                    image: "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&h=350"
                },
                {
                    id: 2,
                    name: "TEST 2",
                    description: "Your local taco shop!",
                    image: "http://tacoshop.biz/images/logo.png?crc=3828647610"
                }
            ],
            displayMenu: false,
            activeMenu: [],
            menus: {
                1: [
                    {id: 1, name: "Burger", price: "4.00", image: "/"},
                    {id: 2, name: "Fries", price: "2.00", image: "/"},
                    {id: 3, name: "Cheeseburger", price: "4.50", image: "/"},
                    {id: 4, name: "Chicken Nuggets", price: "3.50", image: "/"},
                    {id: 5, name: "Baconburger", price: "6.00", image: "/"}
                ],
                2: [
                    {id: 1, name: "Burrito", price: "5.00", image: "/"},
                    {id: 2, name: "Taco", price: "1.50", image: "/"},
                    {id: 3, name: "Enchilada", price: "6.50", image: "/"},
                    {id: 4, name: "Carne Asada Fries", price: "8.00", image: "/"}
                ]
            }
        };
    }

    componentDidMount() {
        fetch("/restaurants").then(restaurants => {
            console.log("Fetched restaurants from API.");
        }).catch(err => {
            this.setState({
                error: true
            });
        });
    }

    openMenu() {
        this.setState({
            displayMenu: true,
            activeMenu: this.state.menus[arguments[0]]
        });
    }

    closeMenu() {
        this.setState({
            displayMenu: false
        });
    }

    render() {
        return (
                <Grid
                    className="UserRestaurantViewGrid"
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={40}
                >
                    {
                        this.state.restaurants.map(restaurant => {
                            return (
                                    <RestaurantSelection
                                        key={restaurant.id}
                                        restaurant={restaurant}
                                        openParentMenu={this.openMenu.bind(this, restaurant.id)}
                                    ></RestaurantSelection>
                                   );
                        })
                    }
                    <Menu
                        open={this.state.displayMenu}
                        menu={this.state.activeMenu}
                        close={this.closeMenu.bind(this)}
                    ></Menu>
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

    onClick() {
        this.props.openParentMenu();
    }

    render() {
        return (
            <Card
                className="RestaurantCard"
                onClick={this.onClick.bind(this)}
            >
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
