// require ( './helpers.js' );

// const chai = require('chai')
// const expect = chai.expect;

// describe('index.js', function() {
//   describe('multiply', function() {
  require('./helpers.js');

const chai = require('chai');
const expect = chai.expect;

describe('index.js', function() {
    it("is an equation whose multiplied results will equal 62", function() {
      expect(num1).to.be.a('number')
      expect(num2).to.be.a('number')
      expect(multiply).to.eq(62)
    });
  });

  describe('random', function() {
    it("generates a random number greater than 0", function() {
      expect(randomNum).to.be.a('number')
      expect(randomNum).to.be.above(0)
    });
  });
  
  // describe('random', function() {
  //   it("generates a random integer greater than 0", function() {
  //     expect(Number.isInteger(random)).to.be.true
  //     expect(random).to.not.eq(0)
  //   });
  // });
  describe('mod', function() {
    it("is an equation that calculates a remainder that is equal to 4", function() {
      expect(num3).to.be.a('number')
      expect(num4).to.be.a('number')
      expect(mod).to.eq(4)
    });
  });
  describe('max', function() {
    it("will return 20 as the highest number in the set", function() {
      expect(max).to.eq(20)
    });
  });
