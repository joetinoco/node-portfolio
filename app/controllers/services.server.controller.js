/*
  "Services" controller
  ==================

  Serve the index layout with the "Services" page content and parameters

*/

// Serve the "Services" page
exports.render = function(req, res){
  var fs = require('fs');
  var content = fs.readFileSync('app/models/services.server.content.html');

  res.render('index', {
    pageHighlight: 'components/topimg',
    highlightImage: 'keyboard.jpg',
    pageContent: content
  });
};
