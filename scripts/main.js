////
// VENDORS
////

// jQuery
window.$ = window.jQuery = require('jquery');
// Bootstrap
require('bootstrap-sass');
// Waypoints
require('../node_modules/waypoints/lib/jquery.waypoints');


////
// MIXINS
////
require('./mixins/triggered-animations')();
require('./mixins/smooth-scroll')();

////
// COMPONENTS
////
require('./components/navbar')(document);
require('./components/hexagon-grid')();
require('./components/device-frame')();

////
// PAGES
////
require('./home/module')(window);
require('./pricing/module')(window);
require('./calculator/module')(window);
