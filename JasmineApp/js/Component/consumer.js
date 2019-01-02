define('Consumer', ['service'], function (service) {
    var _svc;
    function Consumer(svc) {
        _svc = svc || service;
    }
    Consumer.prototype.add = function (a, b) {
        return _svc.serve(a, b);
    }

    
    return Consumer;
})