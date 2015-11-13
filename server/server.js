var express     = require('express')

var app = express();
var port = 1337;

app.use(express.static(__dirname + '/../client'));


app.listen(port);
