'use strict'

/*
 * Create a `keepFirst` function that takes a string as parameter
 * and return the string only keeping the 2 first characters
 *
 * Create a `keepLast` function that takes a string as parameter
 * and return the string only keeping the 2 last characters
 *
 * Create a `keepFirstLast` function that takes a string as parameter
 * and only keep 2 characters from the third character
 *
 */

function keepFirst(x){
	return x.slice(0, 2);
}

function keepLast(x){
	return x.slice(-2);
}

function keepFirstLast(x){
	let a = x.slice(0, 2);
	let b = x.slice(-2);
	return a + b;
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof keepFirst, "function")
assert.strictEqual(typeof keepLast, "function")
assert.strictEqual(typeof keepFirstLast, "function")
assert.strictEqual(keepFirst('bonjour'), 'bo')
assert.strictEqual(keepLast('bonjour'), 'ur')
assert.strictEqual(keepFirstLast('bonjour'), 'bour')

// End of tests */
