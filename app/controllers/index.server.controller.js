exports.render = function(req, res){
  var fs = require('fs');
  var homeContent = fs.readFileSync('app/models/index.server.content.html');

  res.render('index', {
    pageHighlight: 'components/slider',
    pageContent: homeContent
  });
};
