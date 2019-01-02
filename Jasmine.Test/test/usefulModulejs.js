/// <reference path="../../jasmineapp/scripts/require.js" />

define([], function () {
    var m = {
        testMethod: testMethod
    }
    var testMethod = function () {
        return "test"
    };
// add more functionality of the module
    return m;
});