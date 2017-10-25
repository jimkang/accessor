function accessor(prop, defaultValue) {
  var property = 'id';
  if (prop === 'identity') {
    return identity;
  }
  if (prop && typeof prop === 'string') {
    property = prop;
  }
  return function accessProperty(d) {
    if (typeof d === 'object') {
      var value = d[property];
      if (value === undefined) {
        return defaultValue;
      }
      else {
        return d[property];
      }
    }
    else {
      return defaultValue;
    }
  };
}

if (typeof module === 'object' && typeof module.exports === 'object') {
  module.exports = accessor;
}

function identity(x) {
  return x;
}
