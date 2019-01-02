define('httpConsumer', ['httpService'], function (httpService) {

    var _httpSvc;

    function httpConsumer(httpSvc) {

        _httpSvc = httpSvc || httpService;
    }

    httpConsumer.prototype.get = function (id) {

        return _httpSvc.get(id);
    }

    return httpConsumer;
});