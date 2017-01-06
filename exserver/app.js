var express = require('express');
var path = require('path');

var app = express();

// Set Static Path
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, function() {
  console.log('server started on port 3000');
});