/// <reference path="./Scripts/jasmine/jasmine.js"/>
/// <reference path="./../../JasmineApp/Scripts/client.js"/>
/// <reference path="./../../JasmineApp/Scripts/jquery-1.9.1.min.js.js"/>

var url = 'https://jsonplaceholder.typicode.com/users';
describe('api:',function(){

        var id=1;
var foo;

beforeAll(function(done) {

    var mySyncFunction = function () {

        var id=1;
        var layerRequest = getUsers(id);

        layerRequest.success(function(response) {
            foo=response;
        });

        layerRequest.done(function() {
           // Alert Jasmine that the AJAX call is done
           done();
        });
    };

    mySyncFunction();
});
it("meets some requirement", function() {
    for (var i = 0; i < foo.length; i++) {
        var name = foo[i].name;
        expect(name).toBeDefined();
    }
});
/* 

beforeAll(function(done) {
    $.ajax({
        url: url,
        data: {},
        success: function (response) {
            foo = response
            done();
        },
    });
});

it("meets some requirement", function() {
    for (var i = 0; i < foo.length; i++) {
        var name = foo[i].name;
        expect(name).toBeDefined();
    }
});

it("an ajax test", function() {
        var id=1;

    var ajaxFunction = getAttributeInfo(id);
    // creating spied callback
    var callback = jasmine.createSpy('callback');

    spyOn($, 'ajax').and.callFake(function (req) {
        var d = $.Deferred();
        return d.promise();
    });

    // EDIT
    //ajaxFunction.fetch(callback);
    ajaxFunction(callback);

    // everything after this does not seem to execute
    var fakeData = callback.calls.mostRecent().args[0];
});
 var data;
beforeEach(function(done){
        var syncfunction=function(){
        var id=1;
        var ajaxrequest=api.getuser(id);
            
        ajaxrequest.success(function(response){
            data=response;
            done();
        });
    };
    syncfunction(); 
}); 
   it("should make a real AJAX request", function (done) {
        expect(data).not.toBeNull();
    });


    it('ajax call is made to correct url',function(){
        spyOn($, "ajax");
        var id=1;
        api.getuser(id);        
        expect($.ajax.calls.mostRecent().args[0]["url"]).toEqual(url+'/'+id);
    });

    it("should execute the callback function on success", function () {
        spyOn($, "ajax").and.callFake(function(options) {
            options.success();
        });
        var callback = jasmine.createSpy();
        api.getuser(123, callback);
        expect(callback).toHaveBeenCalled();
    });
*/
});