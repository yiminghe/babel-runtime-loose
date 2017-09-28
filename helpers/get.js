var non;

module.exports = function get(object_, property, receiver) {
  var object = object_;
  if (object === null) {
    object = Function.prototype;
  }
  var desc = Object.getOwnPropertyDescriptor(object, property);
  if (!desc) {
    var parent = Object.getPrototypeOf(object);
    if (parent === null) {
      return non;
    }
    return get(parent, property, receiver);
  }
  if ('value' in desc) {
    return desc.value;
  }
  var getter = desc.get;
  if (!getter) {
    return non;
  }
  return getter.call(receiver);
};
