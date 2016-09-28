/**
 * Created by Administrator on 2016/9/27.
 */
suite('"About" Page Tests',function () {
   test('page should contain link to contact page',function () {
       assert($('a[href="/contact"]').length);
   }) ;
});