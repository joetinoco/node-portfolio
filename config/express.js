/*

  Express application startup
  ===========================

*/
var express = require('express'),
  morgan = require('morgan'),
  compression = require('compression'),
  bodyParser = require('body-parser');

module.exports = function(){
  var app = express();

  // Set execution environment dependent middleware
  if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
  } else if (process.env.NODE_ENV === 'production'){
    app.use(compression());
  }

  // Set static files route
  app.use(express.static('public/'));

  // Set POST data parser
  app.use(bodyParser.urlencoded({
    extended: true
  }));

  // Set template engine (EJS)
  app.set('views', './app/views');
  app.set('view engine', 'ejs');
  app.set('view cache', false);

  // Set routes
  require('../app/routes/index.server.routes.js')(app);
  return app;
}
