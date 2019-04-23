var getAtPath = require('get-at-path');

function Accessor() {
  var cachedAccessors = {
    identity: identity
  };
  return accessor;

  function accessor(prop, defaultValue) {
    var property = 'id';
    var cachedAccessor;

    if (defaultValue === undefined) {
      // Never try to cache accessors that have default values.
      cachedAccessor = cachedAccessors[prop];
    }

    if (cachedAccessor) {
      return cachedAccessor;
    }

    if (prop) {
      if (typeof prop === 'string') {
        property = prop;
      }
      else if (typeof prop === 'object' && typeof prop.path === 'string') {
        property = prop.path.split('/');
      }
      else {
        property = '' + prop;
      }
    }

    var accessProperty = createAccessor(property, defaultValue);
    if (defaultValue !== undefined) {
      cachedAccessors[property] = defaultValue;
    }
    return accessProperty;
  }

  function createAccessor(property, defaultValue) {
    return accessProperty;

    function accessProperty(d) {
      if (typeof d === 'object') {
        var value = getPropFromObject(d, property);
        if (value === undefined) {
          return defaultValue;
        }
        else {
          return value; 
        }
      }
      else {
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
}

if (typeof module === 'object' && typeof module.exports === 'object') {
  module.exports = Accessor;
}

function identity(x) {
  return x;
}
