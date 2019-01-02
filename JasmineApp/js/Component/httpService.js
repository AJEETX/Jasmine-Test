define('httpService', [], function () {

    function httpService() {

        return {
            get: get
        };
        function get(id) {
            return "real httpService"
        }
    }
    return httpService();
});