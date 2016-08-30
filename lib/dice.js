'use strict';

const { randomInt } = require('./math')

module.exports.toDiceNotation = ({ count, sides }) => (
		// ob = {sides:6, count: 1}
		// return 1d6
	 `${count}d${sides}`
)

module.exports.roll = (notation) => {
	// +num = Number(num)
	const [count, sides] = notation.split('d').map(num => +num)
		let total = 0;
		for (let i = 0; i < count; i++) {
			total += randomInt(1, sides)
		}
		return total
}


// return Array(count).fill().map(() => randomInt(1, sides)).reduce((p,c) => p+c)
