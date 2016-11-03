/**
 * Created by Administrator on 2016/9/27.
 */

suite('Global Tests',function () {
    test('page has a valid title',function () {
        assert(document.title&&document.title.match(/\S/)&&
                document.title.toUpperCase()!=='TODO');
    });
});