'use strict'

/*
 * Create a `yell` function that takes a string
 * and return the same string in upper case
 *
 */

function yell(x){
	return x.toUpperCase();
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof yell, "function")
assert.strictEqual(yell('str'), 'STR')
assert.strictEqual(yell('HeLLo world'), 'HELLO WORLD')
assert.strictEqual(yell('bOnjouR'), 'BONJOUR')
// End of tests */
