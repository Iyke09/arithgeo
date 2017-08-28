const assert = require('chai').assert;
const myApp = require ('../src/app.js');

describe('Arithmetic Calculations', function() {
  describe('handle valid input', function() {
    it('should return Arithmetic when the input is valid', function() {
      assert.equal(myApp.arithGeo([2,4,6,8,10]),'Arithmetic');
    });
    it('should return Geometric when the input is valid', function() {
      assert.equal(myApp.arithGeo([3,9,27,81]),'Geometric');
    });
    it('should return Arithmetic when the input is valid', function() {
      assert.equal(myApp.arithGeo([-4,-7,-10,-13]),'Arithmetic');
    });
    it('should return Geometric when the input is valid', function() {
      assert.equal(myApp.arithGeo([4,16,64]),'Geometric');
    });
    it('should return -1 when the input is neither Arithmetic or Geometric', function() {
      assert.equal(myApp.arithGeo([2,5,7,8]),-1);
    });
    it('should return Arithmetic when the input is valid', function() {
      assert.equal(myApp.arithGeo([7,14,21,28,35,42]),"Arithmetic");
    });
  });
});

describe('Arithmetic Calculations', function() {
  describe('handle invalid input', function() {
    it('should return 0 when the input is an empty array', function() {
      assert.equal(myApp.arithGeo([]),0);
    });
    it('should return invalid input when the input is of type string', function() {
      assert.equal(myApp.arithGeo(""),"Invalid input");
    });
    it('should return invalid input when the input is of type {}', function() {
      assert.equal(myApp.arithGeo({}),"Invalid input");
    });
    it('should return only numbers are allowed if one of the elements is a string', function() {
      assert.equal(myApp.arithGeo([4,16,64,"hello"]),'only numbers are allowed');
    });
  });
});

