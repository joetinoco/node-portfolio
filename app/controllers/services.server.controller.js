exports.render = function(req, res){
  var fs = require('fs');
  var content = fs.readFileSync('app/models/services.server.content.html');

  res.render('index', {
    pageHighlight: 'components/topimg',
    highlightImage: 'keyboard.jpg',
    pageContent: content
  });
};
