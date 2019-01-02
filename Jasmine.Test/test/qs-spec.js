define(['Squire'], function (Squire) {
    describe('qs.params', function () {
        var injector;

        beforeEach(function () {
            injector = new Squire();
        });

        afterEach(function () {
            injector.remove();
        });

        it('should contain an objet of all query string params', function (done) {
            injector
                .mock('window', {
                    location: {
                        search: '?t=veg&color=blue'
                    }
                })
                .require(['qs'], function (qs) {
                    expect(qs.params).toEqual({
                        t: 'veg',
                        color: 'blue'
                    });

                    done();
                });
        });
    });
});