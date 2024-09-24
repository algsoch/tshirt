// Example Unit test with Mocha and Chai
const chai = require('chai');
const expect = chai.expect;

describe('T-shirt Design Tool', function () {
  it('should load the canvas', function () {
    const canvas = document.createElement('canvas');
    expect(canvas).to.not.be.null;
  });
});
