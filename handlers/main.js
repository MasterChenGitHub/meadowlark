/**
 * Created by Administrator on 2016/11/2.
 */
var fortune = require('../lib/fortune.js');

exports.home=function (req, res) {
    res.render('home');
};

exports.about=function (req, res) {
    res.render('about',{
        fortune:fortune.getFortune(),
        pageTestScript:'/qa/tests-about.js'
    });
};