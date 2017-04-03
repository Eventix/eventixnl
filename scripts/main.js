window.$ = window.jQuery = require('jquery');
require('bootstrap-sass');



// smooth scrolling for anchor links
smoothScroll = require('smooth-scroll');
smoothScroll.init({
  selector: '[data-scroll]', // Selector for links (must be a class, ID, data attribute, or element tag)
  selectorHeader: null, // Selector for fixed headers (must be a valid CSS selector) [optional]
  speed: 500, // Integer. How fast to complete the scroll in milliseconds
  easing: 'easeInOutCubic', // Easing pattern to use
  offset: 0 // Integer. How far to offset the scrolling anchor location in pixels
});


// COMPONENTS
require('./components/navbar.js')(document);
require('./components/hexagon-grid.js')();
require('./components/device-frame.js')();
require('./components/reel-tabs')();


// Require the module for the homepage
require('./home/module.js')(window);
