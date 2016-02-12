/*
  "Projects" controller
  ==================

  Serve the index layout with the "projects" page content and parameters

*/

// Serve the "projects" page
exports.render = function(req, res){
  var fs = require('fs');
  var content = fs.readFileSync('app/models/projects.server.content.html');

  res.render('index', {
    pageHighlight: 'components/topimg',
    highlightImage: 'floppys.jpg',
    pageContent: content
  });
};
