var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var port = process.env.PORT || 5000;
var path = require('path');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static('server/public'));

// app.get('/*', function(req, res) {
//   var file = req.params[0] || 'views/index.html';
//   res.sendFile(path.join(__dirname, 'public', file));
// });

app.listen(port, function(){
  console.log("Listening on port: ", port);
});
