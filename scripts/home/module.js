module.exports = function(global) {

  require('svgxuse'); // fix svg's in IE


  var scanTicket = require('./scan-ticket.js');
  scanTicket(global);
};
