# meadowlark
Node.js  express study project

intsall express:npm install --save express
install express-handlebars:npm install express-handlebars

test framework:
page testing:Mocha npm install --save-dev mocha
mkdir public/vendor
cp node_modules/mocha/mocha.js public/vendor
cp node_modules/mocha/mocha.css public/vendor

assert:chai
npm install --save-dev chai
cp node_modules/chai/chai.js public/vendor


cross-page test:zombie
npm install --save-dev zombie



linting:JSHint
  npm install -g jshint

link checking:LinkChecker http://wummel.github.io/linkchecker/

Automating with Grunt:
sudo npm install -g grunt-cli
npm install --save-dev grunt

plugins
npm install --save-dev grunt-cafe-mocha
npm install --save-dev grunt-contrib-jshint
npm install --save-dev grunt-exec
ps:grunt 0.4.1works


CI server:
        Basically, CI runs some or all of your tests every time you contribute code to a shared server

        Travis CI or Team City

req:http.IncomingMessage
response:http.ServerResponse


express api document:http://expressjs.com/en/api.html
express source code:https://github.com/expressjs/express/tree/master
node documentation:https://nodejs.org/api/http.html



handlebars comments,not send to client
{{! super-secret comment }}
<!-- not-so-secret comment -->

body-parser: npm install --save body-parser

file uploads: Formidable
npm install --save formidable

jquery file upload middleware: npm install --save jquery-file-upload-middleware

recommand demo:http://blueimp.github.io/jQuery-File-Upload/

session :
npm install --save cookie-parser
npm install --save express-session

send email
Nodemailer:npm install --save nodemailer

log:
development: npm install --save morgan
production: npm install --save express-logger

site monitor:UptimeRobot  http://uptimerobot.com/

stress test: npm install --save loadtest

database: MongoDB
online MongoDB hosting service:
MongoLab  mongolab.com
or
MongoHQ

 object document mapper,(ODM) mongoose: npm installl --save mongoose

 using MongoDB for Session Storage: npm install --save session-mongoose


 Subdomains:npm install --save vhost








