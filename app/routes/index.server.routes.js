/*

  Page routes
  ===========

  Each route invokes the corresponding controller, which dictates page layout
  and content.

  This router manages five routes:
  - The home page (server root)
  - "About me" page
  - "Projects" page
  - "Services" page
  - "Contact me" page

*/
module.exports = function(app){
  var index = require('../controllers/index.server.controller');
  var about = require('../controllers/about.server.controller');
  var projects = require('../controllers/projects.server.controller');
  var services = require('../controllers/services.server.controller');
  var contact = require('../controllers/contact.server.controller');
  app.get('/', index.render);
  app.get('/about', about.render);
  app.get('/projects', projects.render);
  app.get('/services', services.render);
  app.get('/contact', contact.render);
  app.post('/submitform', contact.submit);
}
