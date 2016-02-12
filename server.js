process.env.NODE_ENV = process.env.NODE_ENV || 'development';
process.env.PORT = process.env.PORT || 3000;

var express = require('./config/express');

var app = express();
app.listen(process.env.PORT);

console.log('Server (' + process.env.NODE_ENV + ') is up, listening on port ' + process.env.PORT);
