
define(['Consumer', 'service'], function (Consumer, service) {
    describe('Test suite : Consumer', function () {
        var num1, num2;

        describe('Unit : add 2 number', function () {
            it('(10) and (20) returns (30)', function () {
                //given
                num1 = 10;
                num2 = 20;
                var output = 30;
                var serviceSpy = jasmine.createSpyObj('serviceSpy', ["serve"]);
                serviceSpy.serve.and.returnValue(output);
                var sut = new Consumer(serviceSpy);

                //when
                var result = sut.add(num1, num2);

                //then
                expect(result).toEqual(30);
                expect(serviceSpy.serve).toHaveBeenCalled();
            })
        })
        describe('Integration : add 2 number', function () {

            it('input (4) and (5) return (9)', function () {
                //given
                num1 = 4; num2 = 5;
                var sut = new Consumer(service);

                //when
                var result = sut.add(num1, num2);

                //then
                expect(result).toEqual(9);
            })
        })
    })
})