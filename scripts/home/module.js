module.exports = function(global) {

  require('jquery');

  if ($('body').is('.page-home')) {

    require('svgxuse'); // fix svg's in IE

    // Animate headings
    $('.page-home article:not(.no-mark) h2').each(function() {
      var that     = $(this);
      var waypoint = new Waypoint({
        element: that[0],
        handler: function(direction) {
          $(this.element).addClass('pulse');
        },
        offset:  '80%'
      });
    });

    // Ticket scanning animation
    $("#phone-scan").waypoint({
      handler: function(direction) {
        $("#phone-scan").addClass('animate');
      },
      offset:  '90%'
    });

    var diamonds = require('../components/diamonds');

    function alignDiamonds() {
      var lock            = diamonds.findElementPosition(document.getElementById('diamond-lock'));
      var group           = diamonds.findElementPosition(document.getElementById('diamond-group'));
      var markerMiddleY   = 35; // the distance from the top to the middle of the marker
      var markerDistanceX = -210; // the distance from the left of the heading to the tip of the diamond

      // diamond 1
      var topDiamond1  = lock.top - (
        diamonds.getDiamondRectSize('diamond-1').height / 2) - group.top + markerMiddleY;
      var leftDiamond1 = lock.left + markerDistanceX;
      document.getElementById('diamond-1').style.setProperty("top", topDiamond1 + "px");
      document.getElementById('diamond-1').style.setProperty("left", leftDiamond1 + "px");

      // diamond 2
      var positionDiamond2 = diamonds.calculateTouchOffsets('diamond-1', 'diamond-2', 'left', 50);
      document.getElementById('diamond-2').style.setProperty("top", positionDiamond2.y - 800 + "px");
      document.getElementById('diamond-2').style.setProperty("left", positionDiamond2.x - 500 + "px");

      // diamond 3
      var extraOffset3     = 2000;
      var positionDiamond3 = diamonds.calculateTouchOffsets('diamond-1', 'diamond-3', 'left', 50);
      document.getElementById('diamond-3').style.setProperty("top", (
                                                                    positionDiamond3.y + extraOffset3) + "px");
      document.getElementById('diamond-3').style.setProperty("left", (
                                                                     positionDiamond3.x - 300) + "px");
    }

    // On resize recalculate
    window.onresize = function() {
      alignDiamonds();
    };

    alignDiamonds();

  }


};
