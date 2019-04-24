var getAtPath = require('get-at-path');

function accessor(prop, defaultValue) {
  var property = 'id';

  if (prop) {
    if (prop === 'identity') {
      return identity;
    }

    if (typeof prop === 'string') {
      property = prop;
    } else if (typeof prop === 'object' && typeof prop.path === 'string') {
      property = prop.path.split('/');
    } else {
      property = '' + prop;
    }
  }

  var accessProperty = createAccessor(property, defaultValue);
  return accessProperty;
}

function createAccessor(property, defaultValue) {
  return accessProperty;

  function accessProperty(d) {
    if (typeof d === 'object') {
      var value = getPropFromObject(d, property);
      if (value === undefined) {
        return defaultValue;
      } else {
        return value;
      }
    } else {
      return defaultValue;
    }
  }

  function getPropFromObject(d, prop) {
    if (typeof prop === 'string') {
      return d[prop];
    } else if (Array.isArray(prop)) {
      return getAtPath(d, prop);
    }
  }
}

function identity(x) {
  return x;
}

module.exports = accessor;
