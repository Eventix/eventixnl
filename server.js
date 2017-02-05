var express = require('express');
var app = express();

var port = process.env.PORT || 80;

app.use('/', express.static(__dirname + '/'));

app.listen(port, function() {
  console.log('Eventixnl listening on port ' + port);
});