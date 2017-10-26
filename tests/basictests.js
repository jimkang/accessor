var test = require('tape');
var Accessor = require('../index');

test('Basic test', function basicTest(t) {
  var objectWithId = {
    id: 'fhqwhgads',
    otherstuff: [1, 2, 3]
  };

  var objectWithId2 = {
    id: 'tapeleg',
    otherstuff: [4, 5, 6]
  };

  var accessor = Accessor();
  var getId = accessor();
  var getOtherStuff = accessor('otherstuff');

  t.equal(getId(objectWithId), 'fhqwhgads');
  t.deepEqual(getOtherStuff(objectWithId2), [4, 5, 6]);
  t.equal(getId(objectWithId2), 'tapeleg');
  t.deepEqual(getOtherStuff(objectWithId), [1, 2, 3]);
  t.deepEqual(accessor('non-existent', [])(objectWithId), []);
  t.deepEqual(accessor('fhqwhgads', [])(undefined), []);
  t.deepEqual(accessor('identity')(objectWithId), objectWithId);

  t.end();
});
