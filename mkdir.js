var mkdirp = require('mkdirp');

mkdirp('css', function (err) {
  if (err) console.error(err)
});

mkdirp('js', function (err) {
  if (err) console.error(err)
});