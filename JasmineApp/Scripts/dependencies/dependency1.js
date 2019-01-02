/// <reference path="../require.js" />


define(['dependency1'], function () {
    var dep = function () {
        this.getText = function () {
            return 'Original Dependancy';
        };
    };
    return dep;
});