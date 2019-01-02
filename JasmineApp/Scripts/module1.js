/// <reference path="dependencies/dependency1.js" />
/// <reference path="require.js" />

require(['dependencies/dependency1'], function (Dependancy1) {
    var module = function () {
        this.run = function () {
            var d1 = new Dependancy1();
            console.log(d1.getText());
        };
    };
    return module;
});