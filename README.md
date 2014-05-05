# before-death [![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coveralls Status][coveralls-image]][coveralls-url]
> Do something before the death of a process.

`before-death` registers a callback for the following events:

* `exit`
* `uncaughtException
* `SIGHUP`
* `SIGINT`
* `SIGTERM`

Callbacks are never called more than once.

##Example

````javascript
var beforeDeath = require('before-death');

beforeDeath(function(err, code, signal){
  //err exists if an uncaughtException event occurred.
  //code exists if an exit event occurred.
  //signal exists if one of SIGHUP, SIGINT, or SIGTERM was received.

  //do something

  //Always call this in case a signal was recieved.  If you don't, then
  //you're process may live on!  You've been warned.
  process.exit();
});
````

##LICENSE
``````
The MIT License (MIT)

Copyright (c) 2014 Joseph Spencer

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
``````

[downloads-image]: http://img.shields.io/npm/dm/before-death.svg
[npm-url]: https://npmjs.org/package/before-death
[npm-image]: http://img.shields.io/npm/v/before-death.svg

[travis-url]: https://travis-ci.org/jsdevel/node-before-death
[travis-image]: http://img.shields.io/travis/jsdevel/node-before-death.svg

[coveralls-url]: https://coveralls.io/r/jsdevel/node-before-death
[coveralls-image]: http://img.shields.io/coveralls/jsdevel/node-before-death/master.svg
