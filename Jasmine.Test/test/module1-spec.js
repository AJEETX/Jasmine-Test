/// <reference path="./../Scripts/jasmine/jasmine.js"/>
/// <reference path="../../jasmineapp/scripts/require.js" />
/// <reference path="../../jasmineapp/scripts/testr.js" />


describe('dep:',function(){

    it('is',function(){
        require(['./../../JasmineApp/Scripts/module1.js'], function(modul1){
 
            var fakeDep = function(){
                this.getText = function(){
                    return 'Fake Dependancy';
                };
            };
 
            var Module1 = testr('module1', {
                'dependencies/dependency1':fakeDep
            });
 
            var m1 = new Module1();
            expect(m1.run()).toBeDefined();
        });
    });
});