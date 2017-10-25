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

    var thingElements = rootSelectAll('.leaf').data(accessor());
    thingElements.enter().append('option');
    thingElements.text(accessor('label'));
    thingElements.exit().remove();

Installation
------------

    npm install accessor

Usage
-----

If you're using Browserify:

    var accessor = require('accessor');

Otherwise:

    <script src="node_modules/accessor/index.js">

Then, you'll have the `accessor` function. It takes an argument, `property`, and returns a function that takes an object and returns that `object.property`. If you provide no argument `property` will default to `id`.

You can specify a second argument, a default value. The accessor will return the default value if the property you're accessing is undefined on the object.

If you just want the identity function (x => x), you can use `accessor('identity')`. An inline `x => x` definition may actually be fine for your case; `accessor('identity')` just creates fewer copies of that function than that.

Tests
-----

Run tests with `make test`.

License
-------

MIT.
