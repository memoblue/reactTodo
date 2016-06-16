var express = require('express');

var app = express();
const PORT = process.env.PORT || 3000; // node

// openweathermap api doesn't support httpS so we redirect everything to http
app.use(function(req, res, next) {
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + req.url);
  } else {
    next();
  }
});

app.use(express.static('public'));

app.listen(PORT, function() {
  console.log('Express server running on port: ' + PORT);
});
