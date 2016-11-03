/**
 * Created by Administrator on 2016/11/2.
 */
var main=require('./handlebars/main.js');

module.exports=function (app) {
    //miscellaneous routes
    app.get('/', main.home);
    app.get('/about', main.about);

}