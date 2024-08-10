var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');

/** Middlewares */
const globalError = require('./middleware/error-middleware');
const ApiError = require('./utils/api-error');

//Database & Dotenv
const dbConnection = require('./config/database');
const dotenv = require('dotenv');
dotenv.config({ path: 'config.env' });

/**Routes Handler */
const routesHandler = require('./utils/routes-handler');

var app = express();

//CORS Configration
const allowlist = ['http://localhost:3000',]
const corsOptionsDelegate = function (req, callback) {
  let corsOptions;
  if (allowlist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false } // disable CORS for this request
  }
  callback(null, corsOptions) // callback expects two parameters: error and options
}

//Security
app.use(cors(corsOptionsDelegate));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Router Handler & dbconnection
routesHandler(app);
dbConnection();

app.all('*', (req, res, next) => {
  next(new ApiError(`Cant found this route :${req.originalUrl}`, 400))
})
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(globalError);

module.exports = app;
