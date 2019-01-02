define('Calculator', ['service'], function (service) {
    var _svc;
    var vm = {
        add: add,
        _svc:service
    }
    _svc=service;
    function add(a, b) {
        return _svc.serve(a , b);
    }
    return vm
})