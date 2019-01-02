
define('service', [], function () {
    var service = {
        serve: serve
    };
    function serve(a,b){
        return a+b;
    }
    return service;
})