'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

function jadenCase(str){
	return str.toLowerCase()
	.split(' ').map((str) => str.charAt(0).toUpperCase() + str.substring(1))
	.join(' ');
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(jadenCase('str'), 'Str')
assert.strictEqual(jadenCase('qsdqsdqsd'), 'Qsdqsdqsd')
assert.strictEqual(jadenCase('STR'), 'Str')
assert.strictEqual(jadenCase('zapZap'), 'Zapzap')
assert.strictEqual(jadenCase('HeLLO wORLD foo bar'), 'Hello World Foo Bar')
// End of tests */
