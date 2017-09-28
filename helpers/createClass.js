function defineProperties(target, props) {
  props.forEach(function t(descriptor) {
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ('value' in descriptor) {
      descriptor.writable = true;
    }
    Object.defineProperty(target, descriptor.key, descriptor);
  });
}

module.exports = function createClass(Constructor, protoProps, staticProps) {
  if (protoProps) {
    defineProperties(Constructor.prototype, protoProps);
  }
  if (staticProps) {
    defineProperties(Constructor, staticProps);
  }
  return Constructor;
};
