module.exports = function() {

  require('jquery');

  if ($('body').is('.page-pricing')) {

    var diamonds = require('../components/diamonds');

    function alignDiamonds() {
      var lock            = diamonds.findElementPosition(document.getElementById('diamond-lock'));
      var group           = diamonds.findElementPosition(document.getElementById('diamond-group'));
      var markerMiddleX   = 250; // the distance from the left to the middle of the marker
      var markerDistanceY = 500; // the distance from the bottom of the marker to the bottom tip of the diamond

      // diamond 1
      var topDiamond1  = lock.bottom + markerDistanceY +
                         (diamonds.getDiamondRectSize('diamond-1').height - diamonds.getDiamondRealSize('diamond-1').height) / 2
                         - diamonds.getDiamondRectSize('diamond-1').height;
      var leftDiamond1 = lock.left - markerMiddleX - (diamonds.getDiamondRectSize('diamond-1').width / 2);
      document.getElementById('diamond-1').style.setProperty("top", topDiamond1 + "px");
      document.getElementById('diamond-1').style.setProperty("left", leftDiamond1 + "px");

      // diamond 2
      var positionDiamond2 = diamonds.calculateTouchOffsets('diamond-1', 'diamond-2', 'bottom left', 0);
      document.getElementById('diamond-2').style.setProperty("top", positionDiamond2.y + "px");
      document.getElementById('diamond-2').style.setProperty("left", positionDiamond2.x + "px");

      // diamond 3
      var positionDiamond3 = diamonds.calculateTouchOffsets('diamond-1', 'diamond-3', 'bottom right', 50);
      document.getElementById('diamond-3').style.setProperty("top", positionDiamond3.y - 50 + "px");
      document.getElementById('diamond-3').style.setProperty("left", positionDiamond3.x + "px");
    }

    // On resize recalculate
    window.onresize = function() {
      alignDiamonds();
    };

    alignDiamonds();

  }

};
