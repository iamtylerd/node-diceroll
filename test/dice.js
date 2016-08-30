var {isFunction, strictEqual, oneOf} = require('chai').assert


const { toDiceNotation, roll} = require('../lib/dice')
describe('dice', () => {
	describe('toDiceNotation', () => {
		it('should be a function', () => {
		  isFunction(toDiceNotation)
		})
		it('should convert with a count and sides property to dive notation', () => {
			const die = { count: 2, sides: 24}
			const expected = '2d24'
			strictEqual(toDiceNotation(die), expected)
		})
	})
	describe('roll', () => {
		it('should be a function', () => {
		  isFunction(roll)
		})
		it('should handle multiple rolls', () => {
			const die = '3d6'
			const expected = [3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]
			oneOf(roll(die), expected)
		})
	})
})



