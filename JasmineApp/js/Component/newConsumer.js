define('newConsumer', ['newService'], function (newService) {

    var newSvc;

    function newConsumer(Svc) {

        newSvc = Svc || newService;
    }

    newConsumer.prototype.get = function (id) {

        return newSvc.get(id);
    }
    newConsumer.prototype.getMovie = function (id) {
        return newSvc.getData(id).done(function (data) {
            return data;
        });
    }
    function fnresponse(data) {
        return data;
    }
    return newConsumer;
})