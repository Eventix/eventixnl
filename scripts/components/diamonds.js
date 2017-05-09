module.exports = {

  calculateTouchOffsets: function(diamondId1, diamondId2, touchingSide, spacing) {
    // Calculate vertical offset of diamond with id diamondId2
    var yOffsetDiamond1    = parseInt(document.getElementById(diamondId1).style.top, 10);
    var yMiddleDiamond1    = yOffsetDiamond1 + this.getDiamondRectSize(diamondId1).height / 2;
    var topPaddingDiamond1 = (
                             this.getDiamondRectSize(diamondId1).height - this.getDiamondRealSize(diamondId1).height) / 2;
    var topPaddingDiamond2 = (
                             this.getDiamondRectSize(diamondId2).height - this.getDiamondRealSize(diamondId2).height) / 2;
    var yOffsetDiamond2    = 0;
    if (touchingSide.indexOf('bottom') !== -1) {
      yOffsetDiamond2 = yMiddleDiamond1 - topPaddingDiamond2 + spacing;
    } else if (touchingSide.indexOf('top') !== -1) {
      yOffsetDiamond2 = yMiddleDiamond1 + topPaddingDiamond2 - this.getDiamondRectSize(diamondId2).height - spacing;
    }
    // Calculate horizontal offset of diamond with id diamondId2
    var xOffsetDiamond1    = parseInt(document.getElementById(diamondId1).style.left, 10);
    var xOffsetDiamond2    = 0;
    if (touchingSide.indexOf('left') !== -1) {
      xOffsetDiamond2 = xOffsetDiamond1 - this.getDiamondRectSize(diamondId2).width - spacing;
    } else if (touchingSide.indexOf('right') !== -1) {
      xOffsetDiamond2 = xOffsetDiamond1 + this.getDiamondRectSize(diamondId1).width * 2 -
                        this.getDiamondRectSize(diamondId2).width + spacing;

    }
    // Construct final result
    return {
      x: xOffsetDiamond2,
      y: yOffsetDiamond2
    };
  },

  findElementPosition: function(element) {
    var elementBox = element.getBoundingClientRect();
    return {
      left: elementBox.left,
      top: elementBox.top + this.getScrollOffsetY(),
      bottom: elementBox.bottom + this.getScrollOffsetY(),
      right: elementBox.right
    };
  },

  getDiamondRealSize: function(diamondId) {
    var diamondStyle = getComputedStyle(document.getElementById(diamondId), null);
    var dWidth = parseInt(diamondStyle.getPropertyValue('border-left-width'), 10);
    var dHeight = parseInt(diamondStyle.getPropertyValue('border-bottom-width'), 10) * 2;
    return {
      height: dHeight,
      width: dWidth
    }
  },

  getDiamondRectSize: function(diamondId) {
    var diamondStyle = getComputedStyle(document.getElementById(diamondId), null);
    var dWidth = parseInt(diamondStyle.getPropertyValue('border-left-width'), 10);
    var dHeight = parseInt(diamondStyle.getPropertyValue('border-bottom-width'), 10) * 2 + dWidth * 2;
    return {
      height: dHeight,
      width: dWidth
    }
  },

  getScrollOffsetY: function() {
    // Cross-browser-compatible solution: http://stackoverflow.com/a/33462363/2105465
    return window.scrollY || window.pageYOffset || document.body.scrollTop +
           (document.documentElement && document.documentElement.scrollTop || 0)
  }

};


