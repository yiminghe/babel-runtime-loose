var _extends = require('../helpers/extends');

describe('extends', function () {
  it('works', function () {
    var t = _extends({}, { x: 1 }, { y: 1, x: 2 });
    expect(t.x).toBe(2);
    expect(t.y).toBe(1);
  });
});
