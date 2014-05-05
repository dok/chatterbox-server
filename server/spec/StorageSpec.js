var expect = require('../../node_modules/chai/chai').expect;
var storage = require('../storage.js');

describe('Storage utility object', function () {
  it('should exist', function () {
    // storage.should.exist;
    expect(storage).to.exist;
  });
});
