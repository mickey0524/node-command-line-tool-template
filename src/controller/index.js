const express = require('express');

const app = express();

app.get('/', function(req, res){
  res.send('hello world');
});

app.listen('8080', function() {
  console.log('the express server is running, plz open http://127.0.0.1:8080 in brower to visit...');
});

module.exports = app;