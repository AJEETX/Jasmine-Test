/// <reference path="./../../JasmineApp/Scripts/today.js"/>
/// <reference path="./../../JasmineApp/Scripts/requirejs.js"/>
/// <reference path="./../../JasmineApp/Scripts/testr.js"/>

describe('testr:',function(){
    it('stubbing',function(){
        var date, today, output, passed;

        // stubbing
        date = {};
        date.today = new Date(2012, 3, 30);

        // module instancing
        today = testr('today', {'util/date': date});

        // testing
        output = today.getDateString();
        passed = (output === 'Today is Monday, 30th April, 2012');
        console.log('User-friendly date: ' + (passed ? 'PASS' : 'FAIL'));
    });
});