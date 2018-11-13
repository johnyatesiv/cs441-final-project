/** Dependencies **/
const bodyParser = require("body-parser");
const express = require("express");
const UsersController = require("./lib/controllers/UsersController");
const RestaurantsController = require("./lib/controllers/RestaurantsController");
const MenusController = require("./lib/controllers/MenusController");
const OrdersController = require("./lib/controllers/OrdersController");

/** Initialize App as Express obj **/
const app = express();
app.set('view engine', 'html');

/** Serves views from /public directory **/
app.use(express.static("client/build"));
/** Middleware for parsing JSON sent in req bodies **/
app.use(bodyParser.json());

/** Enable CORS **/
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get("/user", (req, res) => {
   UsersController.getUser(req.query.id).then(users => {
       res.json(users[0].dataValues);
   }).catch(err => {
        res.json({error: true, message: err});
    })
});

app.get("/restaurants", (req, res) => {
    RestaurantsController.getRestaurants(req.query).then(restaurants => {
        res.json(restaurants);
    }).catch(err => {
        res.json({error: true, message: err});
    });
});

app.get("/menus", (req, res) => {
    MenusController.getMenus(req.query).then(menus => {
        res.json(menus);
    }).catch(err => {
        res.json({error: true, message: err});
    });
});

/** Generic REST wrappers **/
/**
 * __get
 * @param route
 * @param req
 * @param res
 * @private
 */
__get = (route, req, res) => {

};

/**
 * __post
 * @param route
 * @param req
 * @param res
 * @private
 */
__post = (route, req, res) => {

};

/**
 * __put
 * @param route
 * @param req
 * @param res
 * @private
 */
__put = (route, req, res) => {

};


__delete = (route, req, res) => {

};

const port = process.env.PORT || 5000;
/** Starts the app, listening on 3000 by default or on the configured environment port **/
app.listen(port, () => console.log('FoodApp up and running!'));