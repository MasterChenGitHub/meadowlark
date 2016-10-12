var express = require('express');
var expressHandlerbars = require('express-handlebars');
var fortune = require('./lib/fortune.js');
var bodyParser = require('body-parser');

//file upload
var formidable = require('formidable');

var jquplad = require('jquery-file-upload-middleware');


var app = express();

//omit server information
app.disable('x-powered-by');


//set up handlebars view engine
app.engine('handlebars', expressHandlerbars({defaultLayout: 'main',
helpers:{
    section:function (name, options) {
        if(!this._sections) this._sections={};
        this._sections[name]=options.fn(this);
        return null;
    }
}}));
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'));

//body parser
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())

app.use(function (req, res, next)
{
    if(!res.locals.partials) res.locals.partials={};

    res.locals.partials.weatherContext=getWeatherData();
    next();
});

app.set('port', process.env.PORT || 3000);

app.use(function (req, res, next) {
    res.locals.showTests=app.get('evn')!=='production' && req.query.test==='1';
    next();
});

//jquery file upload middleware

// app.use('/upload',function (req, res, next) {
//     var now=Date.now();
//     jqupload.fileHandler({
//         uploadDir:function () {
//             return --dirname+'/public/uploads/'+now;
//         },
//         uploadUrl:function () {
//             return '/uploads'+now;
//         },
//     })(req,res,next);
// });

app.use('/upload', function(req, res, next){
    var now = Date.now();
    jqupload.fileHandler({
        uploadDir: function(){
            return __dirname + '/public/uploads/' + now;
        },
        uploadUrl: function(){
            return '/uploads/' + now;
        },
    })(req, res, next);
});


app.get('/', function (req, res) {
    res.render('home');

});

app.get('/headers',function (req,res) {
    res.set('Content-Type', 'text/plain');
    var headerString = '';
    for(var name in req.headers){
        headerString += name + ':' + req.headers[name] + '\n';
    }
    res.send(headerString);
});

app.get('/about', function (req, res) {
    res.render('about', {fortune: fortune.getFortune(),
                          pageTestScript:'/qa/tests-about.js'
    });
});

app.get('/tours/hood-river',function (req, res) {
    res.render('tours/hood-river');
});

app.get('/tours/request-group-rate',function (req, res) {
    res.render('tours/request-group-rate');
});

app.get('/jquery-test',function (req, res) {
    res.render('nusery-rhyme');
});

app.get('/nursery-rhyme',function (req, res) {
    res.render('nursery-rhyme');
});

app.get('/data/nursery-rhyme',function (req, res) {
    res.json({
        animal:'squirrel',
        bodyPart:'tail',
        adjective:'bushy',
        noun:'heck',
    });
});


app.get('/thank-you',function (req, res) {
    res.render('thank-you');
});

app.get('/newsletter',function (req, res) {
    //we will learn about CSRF later ... for now, we just
    //provide a dummy value
    res.render('newsletter', {csrf: 'CSRF token goes here'});
});
//
// app.post('/process',function (req, res) {
//     console.log('Form (from querystring): ' + req.query.form);
//     console.log('CSRF token (from hidden form field): ' + req.body._csrf);
//     console.log('Name (from visible form field): '+req.body.name);
//     console.log('Email (from visible form field): ' + req.body.email);
//     res.redirect(303, '/thank-you');
// });

app.post('/process', function(req, res){
    if(req.xhr || req.accepts('json,html')==='json'){
        // if there were an error, we would send { error: 'error description' }
        res.send({ success: true });
    } else {
        // if there were an error, we would redirect to an error page
        res.redirect(303, '/thank-you');
    }
});



app.post('/process',function (req, res) {
   if(req.xhr || req.accepts('json,html')==='json'){
       //if there were an error, we would send {error: 'error description'}
       res.send({success: true});
   } else{
       //if there were an error, we would redirect to an error page
       res.redirect(303, '/thank-you');
   }
});


app.get('/contest/vacation-photo',function (req, res) {
   var now=new Date();
    res.render('contest/vacation-photo',{
        year:now.getFullYear(),month:now.getMonth()
    });
});

app.post('/contest/vacation-photo/:year/:month',function (req, res) {
   var form=new formidable.IncomingForm();
    form.parse(req,function (err, fields, files) {
       if(err) {
           console.log(err);
           return res.redirect(303, 'error');
       }

        console.log('received fields:');
        console.log(fields);
        console.log('received files:');
        console.log(files);
        res.redirect(303, '/thank-you');
    });
});



//404 catch-all handler (middleware)
app.use(function (req, res) {
    res.status(404);
    res.render('404');
});

//custom 500 page
app.use(function (err, req, res, next) {

    console.error(err.stack);
    res.status(500).render('500');
});

app.listen(app.get('port'), function () {
    console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});

function getWeatherData() {
    return{
        locations:[
            {
                name:'Portland',
                forecastUrl:'http://www.wunderground.com/US/OR/Portland.html',
                iconUrl:'http://icons-ak.wxug.com/i/c/k/cloudy.gif',
                weather:'Overcast',
                temp:'54.1 F (12.3 C)',
            },
            {
                name:'Bend',
                forecastUrl:'http://www.wunderground.com/US/OR/Bend.html',
                iconUrl:'http://icons-ak.wxug.com/i/c/k/partlycloudy.gif',
                weather:'Partly cloudy',
                temp:'55.1 F (12.8 C)',

            },
            {
                name:'Manzanita',
                forecastUrl:'http://www.wunderground.com/US/OR/Manzanita.html',
                iconUrl:'http://icons-ak.wxug.com/i/c/k/rain.gif',
                weather:'Light Rain',
                temp:'55.1 F (12.8 C)',
            },

        ]
    };
}