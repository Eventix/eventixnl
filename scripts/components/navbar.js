module.exports = function(document) {
  require('jquery');

  init();

  function init() {
    updateNavbarClass();
    $(document).scroll(function() {
      updateNavbarClass();
    });
  }

  function updateNavbarClass() {
    var offset = window.scrollY || document.documentElement.scrollTop;
    if(offset > 0) {
      $(".navbar-fixed-top").removeClass('on-top');
    } else {
      $('.navbar-fixed-top').addClass('on-top');
    }
  }

};
