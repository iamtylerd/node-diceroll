var {isFunction, isNumber, oneOf} = require('chai').assert

const { randomInt} = require('../lib/math')
describe('math', () => {
	describe('randomInt', () => {
		it('should be a function', () => {
		  isFunction(randomInt)
		})
		it('should return a number', () => {
			oneOf(randomInt(2,6), [2,3,4,5,6])
		})
	})
})
