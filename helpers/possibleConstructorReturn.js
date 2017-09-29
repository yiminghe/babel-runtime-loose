module.exports = function possibleConstructorReturn(self, call) {
  var t = typeof (call);
  return call && (t === 'object' || t === 'function') ?
    call :
    self;
};
