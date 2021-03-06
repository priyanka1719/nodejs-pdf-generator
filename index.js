var express = require('express');
var pdfGeneratorService = require('./pdfGenerationModule/pdfGeneratorService');

var app = express();

app.use(express.static(__dirname + '/public'));

app.listen(3000, function () {
  console.log('Listening on Port : 3000');
  console.log(`Generate PDF using -- http://localhost:3000/pdf`)
});

app.get('/');

app.get('/pdf', function (req, res) {
  pdfGeneratorService();
  res.send('/');
});