module.exports = function() {
  require('jquery');

  init();

  function init() {
    $(".reel-tabs .tabs li").click(function() {
      $(this).parent().find('li').removeClass("active");
      $(this).addClass("active");
      $(this).closest('.reel-tabs').find('.windows [data-tab]').removeClass("active");
      $(this).closest('.reel-tabs').find('.windows [data-tab='+$(this).data('tab')+']').addClass("active");
    });
  }

};
