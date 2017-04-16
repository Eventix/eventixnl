////
// VENDORS
////

// jQuery
window.$ = window.jQuery = require('jquery');
// Bootstrap
require('bootstrap-sass');
// Waypoints
require('../node_modules/waypoints/lib/jquery.waypoints.js');


////
// MIXINS
////
require('./mixins/triggered-animations')();
require('./mixins/smooth-scroll')();

////
// COMPONENTS
////
require('./components/navbar.js')(document);
require('./components/hexagon-grid.js')();
require('./components/device-frame.js')();
require('./components/diamonds.js')();
require('./components/reel-tabs')();

// Require the module for the homepage
require('./home/module.js')(window);
