var objectWithoutProperties = require('../helpers/objectWithoutProperties');

describe('objectWithoutProperties', function () {
  it('works', function () {
    expect(objectWithoutProperties({
      x: 1,
      y: 2,
    }, ['x'])).toEqual({
      y: 2,
    });
  });
});
