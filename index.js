function accessor(prop, defaultValue) {
  var property = 'id';
  if (prop && typeof prop === 'string') {
    property = prop;
  }
  return function accessProperty(d) {
    var value = d[property];
    if (value === undefined) {
      return defaultValue;
    }
    else {
      return d[property];
    }
  };
}

if (typeof module === 'object' && typeof module.exports === 'object') {
  module.exports = accessor;
}
