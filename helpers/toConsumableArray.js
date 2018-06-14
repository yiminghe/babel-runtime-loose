var slice = Array.prototype.slice;

module.exports = function toConsumableArray(a) {
  if (a) {
    return slice.call(a, 0);
  }
  return [];
};
