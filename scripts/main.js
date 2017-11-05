////
// VENDORS
////

// jQuery
window.$ = window.jQuery = require('jquery');
// Bootstrap
require('bootstrap-sass');
// Waypoints
require('../node_modules/waypoints/lib/jquery.waypoints');


////
// MIXINS
////
require('./mixins/triggered-animations')();
require('./mixins/smooth-scroll')();

////
// COMPONENTS
////
require('./components/navbar')(document);
require('./components/hexagon-grid')();
require('./components/device-frame')();

////
// PAGES
////
require('./home/module')(window);
require('./pricing/module')(window);
require('./login/module')(window);
require('./calculator/module')(window);

// i18next
i18next = require('i18next');
i18nextXHRBackend = require('i18next-xhr-backend');
i18nextBrowserLanguageDetector = require('i18next-browser-languagedetector');
jqueryI18next = require('jquery-i18next');
i18next.use(i18nextBrowserLanguageDetector);
i18next.use(i18nextXHRBackend);
i18next.init({
  lng: 'nl',
  debug: true,
  whitelist: ['nl', 'en'],
  ns: ['translation'],
  backend: {
    loadPath: 'i18n/{{lng}}/{{ns}}.json'
  }
}, function(err, t) {
  jqueryI18next.init(i18next, $);
  $(document).localize();
});//.loadLanguages(['nl', 'en']);
