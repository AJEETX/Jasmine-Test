/// <reference path="./Scripts/jasmine/jasmine.js"/>
/// <reference path="./../../JasmineApp/Scripts/calc.js"/>

describe('calc : ', function () {
    it('sum of 2 and 2 return 4', function () {
        expect(calc.add(2, 2)).toEqual(4);
    })
    it('sum of 12 and 2 return 14', function () {
        expect(calc.add(12, 2)).toEqual(14);
    })
    it('subtract of 2 and 2 return 0', function () {
        expect(calc.subtract(2, 2)).toEqual(0);
    })
    it("should return bar", function () {
        expect(App.foo()).toEqual("bar");
    });
});
