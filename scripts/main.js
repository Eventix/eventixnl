window.$ = window.jQuery = require('jquery');
require('bootstrap-sass');

// fix svg's in IE
require('svgxuse');

// smooth scrolling for anchor links
smoothScroll = require('smooth-scroll');
smoothScroll.init({
  selector: '[data-scroll]', // Selector for links (must be a class, ID, data attribute, or element tag)
  selectorHeader: null, // Selector for fixed headers (must be a valid CSS selector) [optional]
  speed: 500, // Integer. How fast to complete the scroll in milliseconds
  easing: 'easeInOutCubic', // Easing pattern to use
  offset: 0 // Integer. How far to offset the scrolling anchor location in pixels
});
