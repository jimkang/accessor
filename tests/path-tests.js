var test = require('tape');
var Accessor = require('../index');

test('Path test', pathTest);

function pathTest(t) {
  var nestedObject1 = {
    data: {
      id: 'fhqwhgads',
    }, 
    otherstuff: [1, 2, 3]
  };

  var nestedObject2 = {
    id: 'tapeleg',
    otherstuff: [4, 5, { name: 'six', number: 6 }]
  };

  var accessor = Accessor();
  var getNestedId = accessor({ path: 'data/id' });
  var getPropObjectInArray = accessor({ path: 'otherstuff/2/number' });
  var getNestedObject = accessor({ path: 'otherstuff/2' });

  t.equal(getNestedId(nestedObject1), 'fhqwhgads');
  t.equal(getPropObjectInArray(nestedObject2), 6, 'Got prop nested in array.');
  t.deepEqual(getNestedObject(nestedObject2), { name: 'six', number: 6});
  t.deepEqual(accessor('data/non-existent', [])(nestedObject1), []);

  t.end();
}

