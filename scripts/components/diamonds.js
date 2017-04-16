module.exports = function() {

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

  init();

  function init() {
    calculateOffset();
    setGroupPageHeight();
  }

};


