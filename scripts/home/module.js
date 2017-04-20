module.exports = function(global) {

  require('svgxuse'); // fix svg's in IE


  var scanTicket = require('./scan-ticket.js');
  scanTicket(global);

  // Animate headings
  $('.page-home article:not(.no-mark) h2').each(function() {
    var that = $(this);
    var waypoint = new Waypoint({
      element: that[0],
      handler: function(direction) {
        $(this.element).addClass('pulse');
      },
      offset: '80%'
    });
  });
};
