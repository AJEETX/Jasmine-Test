///<reference path="jquery-1.9.1.js" />
var url = 'https://jsonplaceholder.typicode.com/users';
var api = {
    getuser: function (id) {
        $.ajax({
            url: url + '/' + id,
            type: 'GET',
            success: function (data) {
                return (data);
            }
        });
    }
}
function getUsers(id) {
    $.ajax({
        url: url,
        data: {},
        success: function (response) {
            return response
        },
    });
}