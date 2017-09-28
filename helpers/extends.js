const slice = Array.prototype.slice;

module.exports = function _extends(to) {
  var from = slice.call(arguments, 1);
  from.forEach(function t(f) {
    if (f && typeof (f) === 'object') {
      Object.keys(f).forEach(function tt(k) {
        to[k] = f[k];
      });
    }
  });
  return to;
};
