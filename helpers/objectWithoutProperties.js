module.exports =  function objectWithoutProperties(obj, keys) {
  var target = {};
  Object.keys(obj).forEach(function t(i) {
    if (keys.indexOf(i) >= 0) {
      return;
    }
    target[i] = obj[i];
  });
  return target;
};
