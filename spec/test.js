var expect = require('chai').expect;
var { bottles } = require('../kata');

describe('bottle', function (){

    it('should return ', function () {
        // expect(bottles()).to.eql(0);
        expect(bottles()).to.eql('99 bottles of beer on the wall, 99 bottles of beer, you take one down, pass it around 98 bottles of beer on the wall.');
});
})