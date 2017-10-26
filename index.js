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
}

if (typeof module === 'object' && typeof module.exports === 'object') {
  module.exports = Accessor;
}

function identity(x) {
  return x;
}
