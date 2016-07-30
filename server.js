var express = require('express');

var app = express();
const PORT = process.env.PORT || 3000; // node

app.use(express.static('public'));

app.listen(PORT, function() {
  console.log('Express server running on port: ' + PORT);
});
