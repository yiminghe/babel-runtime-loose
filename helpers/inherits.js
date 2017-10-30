module.exports = function inherits(subClass, superClass) {
  var proto = subClass.prototype = Object.create(superClass.prototype);
  proto.constructor = subClass;
  if (superClass) {
    // eslint-disable-next-line
    Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }
};
