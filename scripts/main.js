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

// smooth scrolling for anchor links
smoothScroll = require('smooth-scroll');
smoothScroll.init({
  selector: '[data-scroll]', // Selector for links (must be a class, ID, data attribute, or element tag)
  selectorHeader: null, // Selector for fixed headers (must be a valid CSS selector) [optional]
  speed: 500, // Integer. How fast to complete the scroll in milliseconds
  easing: 'easeInOutCubic', // Easing pattern to use
  offset: 0 // Integer. How far to offset the scrolling anchor location in pixels
});

////
// COMPONENTS
////
require('./components/navbar')(document);
require('./components/hexagon-grid')();
require('./components/device-frame')();
require('./components/reel-tabs')();

// Require the module for the homepage
require('./home/module.js')(window);

// BACKGROUNDS
var x = 0;

function calculateOffset(){
  var x = cumulativeOffset( document.getElementById('diamond-lock') ).left - 159;
  document.getElementById('diamond-1').style.setProperty("left", x+"px");
  var other = x - 5290;
  document.getElementById('diamond-2').style.setProperty("left", other+"px");
}

function setGroupPageHeight(){
  var groupHeight = document.body.clientHeight - cumulativeOffset(document.getElementById('diamond-group')).top;
  console.log(document.body.clientHeight,groupHeight);
  document.getElementById('diamond-group').style.setProperty("height", groupHeight+"px");
}

var cumulativeOffset = function(element) {
  var elementBox = element.getBoundingClientRect();
  return {
    left: elementBox.left,
    top: elementBox.top
  };
};

// On resize recalculate
window.onresize = function() {
  calculateOffset();
  setGroupPageHeight();
};

// Init
calculateOffset();
setGroupPageHeight();
