var express = require('express');
var path = require('path');
var app = express();

var port = process.env.PORT || 80;

app.use('/', express.static(path.join(__dirname, 'public')));

app.listen(port, function() {
  console.log('Eventixnl listening on port ' + port);
});