var express = require('express');
var expressHandlerbars = require('express-handlebars');
var fortune = require('./lib/fortune.js');

var app = express();



//set up handlebars view engine
app.engine('handlebars', expressHandlerbars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'));

app.set('port', process.env.PORT || 3000);

app.get('/', function (req, res) {
    res.render('home');

});

app.get('/about', function (req, res) {
    res.render('about', {fortune: fortune.getFortune()});
});


//404 catch-all handler (middleware)
app.use(function (req, res) {
    res.status(404);
    res.render('404');
});

//custom 500 page
app.use(function (err, req, res, next) {

    console.error(err.stack);
    res.status(500);
    res.render('500');
});

app.listen(app.get('port'), function () {
    console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});
