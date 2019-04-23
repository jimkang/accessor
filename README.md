accessor
==================

Here's a thing you have to do a lot when using [D3](http://d3js.org) [data joins](https://github.com/mbostock/d3/wiki/Selections#data):


    // Here, you provide a function to that gets an id from a datum so that D3 
    // can correctly identify a corresponding element to update.
    var thingElements = rootSelectAll('.leaf').data(
      things, function getId(thing) { return thing.id; }
    );
    thingElements.enter().append('option');
    // Here, you provide a function get gets a label from a datum so that D3 
    // can set the text for each element.
    thingElements.text(function getLabel(thing) { return thing.label; });
    thingElements.exit().remove();

While those accessor functions aren't hard to write, it's easier to just use something that makes them for you, like this:

    var thingElements = rootSelectAll('.leaf').data(data, accessor());
    thingElements.enter().append('option');
    thingElements.text(accessor('label'));
    thingElements.exit().remove();

If you want to write accessors that traverse a path in an object to get properties, do this:

    thingElements.text(accessor({ path: 'data/meta/label'));

That will make it look for an object named `data`, then look for an object named `meta` in that, then look for a property named `label` within that. If you need to traverse arrays you can use array indexes in the path, e.g. `data/list/3/label`.

Installation
------------

    npm install accessor

Usage
-----

If you're using Browserify:

    var Accessor = require('accessor');

Otherwise:

    <script src="node_modules/accessor/index.js">

Then, you'll have the `Accessor` constructor. It will return to you an instance of accessor that takes an argument, `property`, and returns a function that takes an object and returns that `object.property`. If you provide no argument `property` will default to `id`.

e.g.

        var Accessor = require('accessor');
        var createAccessor = Accessor();
        rootSelectAll('.leaf').data(things, createAccessor('foo'));

accessor instances cache the functions they create. So if you call `createAccessor('foo')` twice, you'll always get back the same accessor function.

You can specify a second argument, a default value. The accessor will return the default value if the property you're accessing is undefined on the object. (It will never cache accessors that have a default value, BTW.)

If you just want the identity function (x => x), you can use `createAccessor('identity')`. An inline `x => x` definition may actually be fine for your case; `createAccessor('identity')` just creates fewer copies of that function than that.

Tests
-----

Run tests with `make test`.

License
-------

MIT.
