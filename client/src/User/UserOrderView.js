import React from 'react';
import './UserOrderView.css';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
//import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
//import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';

/** Other Views **/

class UserOrderView extends React.Component {
    constructor() {
        super();

        this.state = {};
    }

    componentDidMount() {
        fetch("/orders").then(res => {
            res.json();
        }).then(json => {
            console.log("Fetched orders from API.");
            this.setState({
                orders: json
            });
        }).catch(err => {
            this.setState({
                error: true
            });
        });
    }

    render() {
        return (
            <div
                className="UserOrderViewContainer"
            >
                <h1>Your Orders</h1>
                <Grid
                    className="UserOrderViewGrid"
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={40}
                >
                    {
                        this.state.orders.map(order => {
                            return (
                                <OrderSelection
                                    key={order.id}
                                    order={order}
                                    openParentMenu={this.openMenu.bind(this, order.id)}
                                ></OrderSelection>
                            );
                        })
                    }
                </Grid>
            </div>
        );
    }
}

class OrderSelection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    onClick() {

    }

    openItemSummary() {

    }

    render() {
        return (
            <Card
                className="OrderCard"
                onClick={this.openItemSummary}
            >
                <CardContent className="OrderCardContent">
                    {this.props.order.name}
                    <br/>
                    <CardMedia
                        className="OrderCardMedia"
                        component="img"
                        image={this.props.order.image}
                    />
                    <br/>
                    {this.props.order.price}
                </CardContent>
                <CardActions></CardActions>
            </Card>
        )
    }
}

export default UserOrderView;
