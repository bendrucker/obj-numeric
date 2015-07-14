'use strict'

var test = require('tape')
var objNumeric = require('./')

test(function (t) {
  t.deepEqual(objNumeric(['foo', 'bar']), {
    foo: 0,
    bar: 1
  })
  t.deepEqual(objNumeric(['foo', 'bar'], 1), {
    foo: 1,
    bar: 2
  })
  t.end()
})
