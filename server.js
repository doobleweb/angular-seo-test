var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(__dirname + '/public'));

app.all('/*', function(req, res, next) {
    // Just send the index.html for other files to support HTML5Mode
    res.sendFile('public/index.html', { root: __dirname });
});

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function () {
    console.log('listen on port ' + app.get('port'));
});