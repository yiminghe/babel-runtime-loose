module.exports = function possibleConstructorReturn(self, call) {
  var t = typeof (call);
  return call &&
  ((t === 'undefined' ? 'undefined' : t) === 'object' || t === 'function') ?
    call :
    self;
};
