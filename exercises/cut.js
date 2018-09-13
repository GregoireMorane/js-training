'use strict'

/*
 * Create the `cutFirst` function that takes a string and remove the 2 first characters
 * Create the `cutLast` function that takes a string and remove the 2 last characters
 * Create the `cutFirstLast` function that takes a string as parameter
 * and remove the 2 first characters and 2 last characters
 *
 * @notions String methods
 * https://github.com/nan-academy/refs/blob/master/js-training/methods.md#string---transform
 */

function cutFirst(x){
	return x.substr(2);
}

function cutLast(x){
	return x.substr(0, x.length-2);
}

function cutFirstLast(x){
	return x.substr(2).slice(0, -2);
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof cutFirst, "function")
assert.strictEqual(typeof cutLast, "function")
assert.strictEqual(typeof cutFirstLast, "function")
assert.strictEqual(cutFirst('bonjour'), 'njour')
assert.strictEqual(cutLast('bonjour'), 'bonjo')
assert.strictEqual(cutFirstLast('bonjour'), 'njo')

// End of tests */
