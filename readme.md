# obj-numeric [![Build Status](https://travis-ci.org/bendrucker/obj-numeric.svg?branch=master)](https://travis-ci.org/bendrucker/obj-numeric) [![Greenkeeper badge](https://badges.greenkeeper.io/bendrucker/obj-numeric.svg)](https://greenkeeper.io/)

> Create an object with incremented numeric values from an array of keys


## Install

```
$ npm install --save obj-numeric
```


## Usage

```js
var objNumeric = require('obj-numeric')

objNumeric(['foo', 'bar'])
//=> {foo: 0, bar: 1}

objNumeric(['foo', 'bar'], 1)
//=> {foo: 1, bar: 2}
```

## API

#### `objNumeric(keys, [offset])` -> `object`

##### keys

*Required*  
Type: `array`

An array of keys to add to the output object.

##### offset

Type: `number`  
Default: `0`

An offset for each number.


## License

MIT © [Ben Drucker](http://bendrucker.me)
