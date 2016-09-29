/**
 * Created by Administrator on 2016/9/28.
 */

var fortune = require('../lib/fortune.js');
var expect = require('chai').expect;

suite('Fortune cookie tests',function () {
   test('getFortune() should return a fortune ',function () {

       console.log(typeof fortune.getFortune());
       // expect(typeof fortune.getFortune()!=='string1');
       expect(typeof fortune.getFortune()).to.be.a('string');
   }) ;
});