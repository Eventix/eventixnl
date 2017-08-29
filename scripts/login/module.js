module.exports = function() {

  require('jquery');

  if ($('body').is('.page-login')) {

    var diamonds = require('../components/diamonds');

    function alignDiamonds() {
      var lock            = diamonds.findElementPosition(document.getElementById('diamond-lock'));
      var group           = diamonds.findElementPosition(document.getElementById('diamond-group'));
      var markerMiddleY   = 35; // the distance from the top to the middle of the marker
      var markerDistanceX = 0; // the distance from the left of the heading to the tip of the diamond

      // diamond 1
      var topDiamond1  = lock.top - (
        diamonds.getDiamondRectSize('diamond-1').height / 2) - group.top + markerMiddleY;
      var leftDiamond1 = lock.left + markerDistanceX;
      document.getElementById('diamond-1').style.setProperty("top", topDiamond1 + "px");
      document.getElementById('diamond-1').style.setProperty("left", leftDiamond1 + "px");

      // diamond 2
      var positionDiamond2 = diamonds.calculateTouchOffsets('diamond-1', 'diamond-2', 'left bottom', -1);
      document.getElementById('diamond-2').style.setProperty("top", positionDiamond2.y + "px");
      document.getElementById('diamond-2').style.setProperty("left", positionDiamond2.x + "px");
    }

    // On resize recalculate
    window.onresize = function() {
      alignDiamonds();
    };

    alignDiamonds();

  }

};
