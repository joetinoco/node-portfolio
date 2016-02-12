/*
  "About" controller
  ==================

  Serves the index layout with the "about me" page content and parameters

*/

// Serve the "about" page
exports.render = function(req, res){
  var fs = require('fs');
  var content = fs.readFileSync('app/models/about.server.content.html');

  res.render('index', {
    pageHighlight: 'components/topimg',
    highlightImage: 'desktop.jpg',
    pageContent: content
  });
};
