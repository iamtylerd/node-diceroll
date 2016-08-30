var {isFunction, deepEqual} = require('chai').assert

	const parseArgs = require('../lib/parse-args')
	describe('parse-args', () => {
		it('should be a function', () => {
			isFunction(parseArgs)
		})
		it('should handle no arguments', () => {
			const args = []
			const expected = { count: 1, sides: 6 }
				// deep equal to compare to objs that look a like
				deepEqual(parseArgs(args), expected)
		})
		it('should handle no arguments', () => {
			const args = [5]
			const expected = { count: 1, sides: 5 }
				deepEqual(parseArgs(args), expected)
		})
		it('should handle no arguments', () => {
			const args = [2, 6]
			const expected = { count: 2, sides: 6 }
				deepEqual(parseArgs(args), expected)
		})
	})
