/// <reference path="../../jasmineapp/scripts/require.js" />

define('consumerModule',["usefulModule"], function (usefulModule) {
    var vm = {
        consumerModule: consumerModule
    }
        function consumerModule() {
            var self = this;
            self.usefulModule = new usefulModule();
        }
    return vm;
    });