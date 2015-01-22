function accessor(prop) {
  var property = 'id';
  if (prop && typeof prop === 'string') {
    property = prop;
  }
  return function accessProperty(d) {
    return d[property];
  };
}

if (typeof module === 'object' && typeof module.exports === 'object') {
  module.exports = accessor;
}
