module.exports = function() {
  require('jquery');

  init();

  function init() {
    $("[data-scale]").each(function() {
      var width = $(this).find('iframe').width();
      var scale = $(this).data('scale');
      $(this).find('iframe').css('width', scale + 'px').css('transform', 'scale('+ (width / scale) + ')');
    });
  }

};
