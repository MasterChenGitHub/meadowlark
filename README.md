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


