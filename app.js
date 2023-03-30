const express = require('express');
const app = express();
const passport = require('passport');
const session = require('express-session');
const db = require('./models')
const { seedData } = require('./seeders/seedDB')
require('dotenv').config({})

// Passport Config
require("./config/passport");

// assets middleware
app.use(express.static(__dirname + "/assets"));

// request body parser middleware
app.use(
    express.urlencoded({
        extended: true
    })
);

// Enable session support
app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: false
}));

//Initialize passport
app.use(passport.initialize());
app.use(passport.session());

//templating engine
app.set("views", `${__dirname}/views`);
app.set("view engine", "ejs");


//routes
require("./routes/r-index")(app);
app.use('/', (req, res) => {
    return res.render('index')
})

db.sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch((err) => {
        console.error('Unable to connect to the database:', err);
    });

db.sequelize.sync().then(() => seedData())

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.error(`App is Running at http://localhost:${PORT}`);
});