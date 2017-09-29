const createClass = require('../helpers/createClass');

describe('createClass', function () {
  it('works', function () {
    function n() {
    }

    createClass(n, [{
      key: 'x',
      value: 1,
    }], [{
      key: 'y',
      value: 1,
    }]);

    expect(n.prototype.x).toBe(1);
    expect(n.y).toBe(1);
  });
});
