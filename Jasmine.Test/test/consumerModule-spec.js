/// <reference path="consumermodule.js" />
/// <reference path="mock/usefulmodulemock.js" />
/// <reference path="../../jasmineapp/scripts/require.js" />



describe("when mocking out the module", function () {
    var originalTimeout;

    var consumer,mqModule;
    beforeEach(function () {
        require(["consumerModule"], function (consumerModule) {
            originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
            jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
            consumer = consumerModule;
        });

    })
    afterEach(function () {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });


    it("should probably just override the property", function (done) {

        consumer.usefulModule = mqModule;
            expect(true).toEqual(true);
        done();
        });
});