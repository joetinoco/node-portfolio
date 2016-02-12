/*

  Joseph Tinoco's Node.js Portfolio
  =======================================================

  by Joseph Tinoco - Centennial College
  Student number - 300819835
  Winter 2016

  Written as an assignment for the "Emerging Technologies" class.
  Instructor - Fariborz Khanzadeh
  -------------------------------------------------------

  Assignment objectives: "Create your Personal Portfolio Website using Node.js,
  Express, and implementing the EJS templating engine."

  Note: Although Node is *not* the ideal framework to build a personal
  portfolio (because the node server is serving mostly static content), this
  assignment was done according to specifications.

  This project uses the Materialize front-end framework for responsive,
  mobile-first layouts. http://materializecss.com/

*/

var express = require('./config/express');
var app = express();
app.listen(process.env.PORT);
console.log('Server (' + process.env.NODE_ENV + ') is up, listening on port ' + process.env.PORT);
