'use strict';

module.exports.randomInt = (min, max) => (
	 Math.floor(
		Math.random()
		* (max + 1 - min)
		+ min
		)
	)


