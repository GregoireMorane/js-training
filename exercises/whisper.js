'use strict'

/*
 * Create a `whisper` function that takes a string
 * and return the same string in lower case
 * and wrapped by `*`
 *
 */

function whisper(x){
	return '*' + x.toLowerCase() + '*';
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof whisper, "function")
assert.strictEqual(whisper('STR'), '*str*')
assert.strictEqual(whisper('BONjour'), '*bonjour*')

// End of tests */
