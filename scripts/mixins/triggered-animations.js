module.exports = function() {
  require('jquery');

  init();

  function init() {
    $('[data-animation-trigger=scroll]').each(function() {
      var that = $(this);
      var waypoint = new Waypoint({
        element: that[0],
        animation: that.data('animation'),
        handler: function(direction) {
          $(this.element).addClass(this.options.animation);
        },
        offset: that.data('animation-offset') || '80%'
      });
    });
  }

};
