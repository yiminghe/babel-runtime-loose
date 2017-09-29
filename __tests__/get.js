const _get = require('../helpers/get');
const _inherits = require('../helpers/inherits');

describe('get', function () {
  it('works', function () {
    function A() {

    }

    function z() {
    }

    A.prototype.z = z;

    function cz() {
      expect(_get(C.prototype.__proto__ || Object.getPrototypeOf(C.prototype), "z", this)).toBe(z);
    }

    function B() {

    }

    _inherits(B, A);

    function C() {
    }

    _inherits(C, B);

    C.prototype.z = cz;

    var c = new C();
    c.z();
  });
});