var express = require('express'),
  morgan = require('morgan'),
  compress = require('compress'),
  bodyParser = require('body-parser');

module.exports = function(){
  var app = express();

  if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
  } else if (process.env.NODE_ENV === 'production'){
    app.use(compress());
  }

  app.use(express.static('public/'));
  app.use(bodyParser.urlencoded({
    extended: true
  }));

  // EJS
  app.set('views', './app/views');
  app.set('view engine', 'ejs');
  app.set('view cache', false);

  require('../app/routes/index.server.routes.js')(app);
  return app;
}
