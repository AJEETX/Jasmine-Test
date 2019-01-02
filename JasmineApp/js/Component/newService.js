define('newService',['jquery'], function ($) {
    var url = 'https://jsonplaceholder.typicode.com/users';
    function newService() {

        return {
            get: get,
            getData: getData
        };
        function getData(id) {
            return $.getJSON(url +'/' +id)
                .then(function (response) {
                    return response;
                });
        }
        function get(id) {
            return "real newService"
        }
    }
    return newService();
});