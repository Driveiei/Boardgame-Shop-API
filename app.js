const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const boardgameRoutes = require('./api/routes/boardgame');
const boardgameRoutesTwo = require('./api/routes/boardgametwo');
const boardgameRoutesThree = require('./api/routes/boardgamethree');
const boardgameRoutesFour = require('./api/routes/boardgamefour');

const orderRoutes = require('./api/routes/order');

//Connect with mongodb cloud(cluster)
mongoose.connect('mongodb+srv://board-game-acc:'
    + process.env.MONGO_ATLAS_PW +
    '@board-game-project-nhoof.mongodb.net/test?retryWrites=true&w=majority',
    {
        useNewUrlParser: true
    }
);
mongoose.Promise = global.Promise;

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req, res, next)=>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization' 
    );
    if (req.method === 'OPTIONS') {
        res.header(
            'Access-Control-Allow-Method', 
            'PUT, POST, PATCH, DELETE, GET' 
        );
        return res.status(200).json({});
    }
    next();
});

// Route which should handle requests
app.use('/boardgame', boardgameRoutes);
app.use('/boardgametwo', boardgameRoutesTwo);
app.use('/boardgamethree', boardgameRoutesThree);
app.use('/boardgamefour', boardgameRoutesFour);
app.use('/order', orderRoutes);

app.use((req, res, next)=>{
    const error = new Error('Not found');
    error.status == 404;
    next(error); 
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;