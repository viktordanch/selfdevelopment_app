define(['chai'], function (chai) {
    var expect = chai.expect;
    describe('just checking', function () {

        it('sample expect', function () {
            //just checking that it works
            expect(1).to.be.equal(1);
        });

        it('sample expect 2', function () {
            //just checking that it works
            expect([1, 2, 3].length).to.be.equal(3);
        });

    });

});
