'use strict'

module.exports = function objNumeric (keys, offset) {
  offset = offset || 0
  var result = {}
  for (var i = 0; i < keys.length; i++) {
    result[keys[i]] = i + offset
  }
  return result
}
