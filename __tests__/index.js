var possibleConstructorReturn = require('../helpers/possibleConstructorReturn');
var toConsumableArray = require('../helpers/toConsumableArray');

describe('possibleConstructorReturn', function () {
  it('works', function () {
    var self = {};

    var call = {};

    expect(possibleConstructorReturn(self, call)).toBe(call);

    expect(possibleConstructorReturn(self, undefined)).toBe(self);
  });
});


describe('toConsumableArray', function () {
  it('works', function () {
    var t = [1, 2];
    expect(toConsumableArray(t)).toEqual(t);
    expect(toConsumableArray(t)).not.toBe(t);
    expect(toConsumableArray(null)).toEqual([]);
  });
});
