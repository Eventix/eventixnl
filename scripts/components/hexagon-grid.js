module.exports = function() {
  require('jquery');
  require('svgxuse'); // fix svg's in IE

  init();

  function init() {
    $('[data-hexclass]').hover(
      function() {
        // highlight tabs and hexagons on hover
        $('[data-hexclass='+$(this).data('hexclass')+']').addClass('highlighted');
      },
      function() {
        // unhighlight tabs and hexagons on leave
        $('[data-hexclass='+$(this).data('hexclass')+']').removeClass('highlighted');
      }
    );
  }

};
