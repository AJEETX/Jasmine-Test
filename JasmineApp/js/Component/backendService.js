define('backendService', [], function (backendService) {
    function backendService() {
        return {
            get: get
        };
        function get(id) {
            return "real backendService with id ="+id;
        }
    }
})