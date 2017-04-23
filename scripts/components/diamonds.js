module.exports = function() {

  function alignDiamonds(){
    var lock = findElementPosition(document.getElementById('diamond-lock'));
    var group = findElementPosition(document.getElementById('diamond-group'));
    var markerMiddleY = 48; // the distance from the top to the middle of the marker
    var markerDistanceX = -155; // the distance from the left of the heading to the tip of the diamond

    // diamond 1
    var topDiamond1 = lock.top - (getDiamondRectSize('diamond-1').height / 2) - group.top + markerMiddleY;
    var leftDiamond1 = lock.left + markerDistanceX;
    document.getElementById('diamond-1').style.setProperty("top", topDiamond1+"px");
    document.getElementById('diamond-1').style.setProperty("left", leftDiamond1+"px");

    // diamond 2
    var positionDiamond2 = calculateTouchOffsets('diamond-1', 'diamond-2', 'left', 50);
    document.getElementById('diamond-2').style.setProperty("top", positionDiamond2.x+"px");
    document.getElementById('diamond-2').style.setProperty("left", positionDiamond2.y+"px");

    // diamond 3
    var extraOffset3 = 2000;
    var positionDiamond3 = calculateTouchOffsets('diamond-1', 'diamond-3', 'left', 50);
    document.getElementById('diamond-3').style.setProperty("top", (positionDiamond3.x + extraOffset3)+"px");
    document.getElementById('diamond-3').style.setProperty("left", (positionDiamond2.y - 300) +"px");
  }

  var calculateTouchOffsets = function(diamondId1, diamondId2, verticalPosition, spacing) {
    // Calculate vertical offset of diamond with id diamondId2
    var xOffsetDiamond1 = parseInt(document.getElementById(diamondId1).style.top, 10);
    var xMiddleDiamond1 = xOffsetDiamond1 + getDiamondRectSize(diamondId1).height / 2;
    var topPaddingDiamond2 = (getDiamondRectSize(diamondId2).height - getDiamondRealSize(diamondId2).height) / 2;
    var xOffsetDiamond2 = xMiddleDiamond1 - topPaddingDiamond2 + spacing;
    // Calculate horizontal offset of diamond with id diamondId2
    var yOffsetDiamond1 = parseInt(document.getElementById(diamondId1).style.left, 10);
    var yOffsetDiamond2 = 0;
    if (verticalPosition === 'left') {
      yOffsetDiamond2 = yOffsetDiamond1 - getDiamondRectSize(diamondId2).width - spacing;
    } else if (verticalPosition === 'right') {
      yOffsetDiamond2 = yOffsetDiamond1 + getDiamondRectSize(diamondId1).width / 2 + spacing;
    }
    // Construct final result
    return {
      x: xOffsetDiamond2,
      y: yOffsetDiamond2
    };
  };

  var findElementPosition = function(element) {
    var elementBox = element.getBoundingClientRect();
    return {
      left: elementBox.left,
      top: elementBox.top
    };
  };

  var getDiamondRealSize = function(diamondId) {
    var diamondStyle = getComputedStyle(document.getElementById(diamondId), null);
    var dWidth = parseInt(diamondStyle.getPropertyValue('border-left-width'), 10);
    var dHeight = parseInt(diamondStyle.getPropertyValue('border-bottom-width'), 10) * 2;
    return {
      height: dHeight,
      width: dWidth
    }
  };

  var getDiamondRectSize = function(diamondId) {
    var diamondStyle = getComputedStyle(document.getElementById(diamondId), null);
    var dWidth = parseInt(diamondStyle.getPropertyValue('border-left-width'), 10);
    var dHeight = parseInt(diamondStyle.getPropertyValue('border-bottom-width'), 10) * 2 + dWidth * 2;
    return {
      height: dHeight,
      width: dWidth
    }
  };

  // On resize recalculate
  window.onresize = function() {
    alignDiamonds();
  };

  init();

  function init() {
    alignDiamonds();
  }

};


