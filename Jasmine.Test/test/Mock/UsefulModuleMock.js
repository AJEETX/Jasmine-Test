/// <reference path="../../../JasmineApp/Scripts/require.js" />

define('mock',[], function () {
    var m = {
        testMethod: testMethod
    }
    var testMethod = function () {
        return "mocktest"
    };
    // add more functionality of the module
    return m;
});