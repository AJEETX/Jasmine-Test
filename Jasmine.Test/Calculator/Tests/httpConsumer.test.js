define(['httpConsumer', 'httpService'], function (httpConsumer, httpService) {

    describe('Test suite : httpConsumer:', function () {
        var id;
        it('Unit : get the data', function () {

            //given
            id = 1;
            fake = "fake";
            var httpServiceSpy = jasmine.createSpyObj('httpService', ['get']);
            httpServiceSpy.get.and.returnValue(fake);
            var sut = new httpConsumer(httpServiceSpy);

            //when
            var result = sut.get(id);

            //then
            expect(httpServiceSpy.get).toHaveBeenCalled();
            expect(result).toEqual(fake);
        })
    })


    describe('Test suite : httpConsumer:', function () {

        it('Integration : get the data', function () {
            //given
            id = 1;
            var sut = new httpConsumer(httpService);

            //when
            var result = sut.get(id);

            //then
            expect(result).toBeDefined();

        })
    })
});