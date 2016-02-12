// Get configuration file for the exexcution environment
module.exports = require('env/' + process.env.NODE_ENV + '.js');
