define(['newConsumer', 'newService','jquery'], function (newConsumer, newService,$) {

    describe('Test Suite : apiConsumer', function () {

        it('Unit : get name from service', function () {

            //given
            var fake = "fake";
            var newServiceSpy = jasmine.createSpyObj('newServiceSpy', ['get']);
            newServiceSpy.get.and.returnValue(fake);
            var sut = new newConsumer(newServiceSpy);

            //when
            var result = sut.get(1);

            //then
            expect(newServiceSpy.get).toHaveBeenCalled();
            expect(result).toEqual(fake);
        })
    })

    describe('Test Suite : apiConsumer:', function () {

        it('Integration : get data from api service', function (done) {

            //given
            var sut = new newConsumer(newService);

            //when
            var response = sut.getMovie(1).then(function (result) {
                //then
                expect(result).not.toBeNull();
                done();
            });

            

        })
    })
});