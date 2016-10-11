/**
 * d20.js
 *
 * Javascript library for rolling dice. Supports strings written in a dice-rolling syntax, eg. "d20", "4d6", "1d8+1".
 *
 * @author Michael Enger <mike@thelonelycoder.com>
 * @licence MIT
 */
(function() {
"use strict";

var d20 = {

	/**
	 * Roll a number of dice and return the result.
	 *
	 * @param dice Type of dice to roll, can be represented in various formats:
	 *               - a number (6, 12, 42)
	 *               - dice syntax (d20, 4d6, 2d8+2)
	 * @param verbose Whether or not all dice rolls should be returned as an array
	 * @return Number|Array
	 */
	roll: function(dice, verbose) {
		var result = d20.verboseRoll(dice),
			num = 0;

        if(verbose) {
            return result;
        } else {
            for (var i in result) {
                num += result[i];
            }

            return num;
        }
	},

	/**
	 * Roll a number of dice and return the result as an array.
	 *
	 * @param dice Type of dice to roll, can be represented in various formats:
	 *               - a number (6, 12, 42)
	 *               - dice syntax (d20, 4d6, 2d8+2)
	 * @return Array
	 */
	verboseRoll: function(dice) {
		var amount = 1,
			mod = 0,
			results = [],
			match,
			num,
			modifiers;

		if (!dice) {
			throw new Error('Missing dice parameter.');
		}

		if (typeof dice == 'string') {
			match = dice.match(/^\s*(\d+)?\s*d\s*(\d+)\s*(.*?)\s*$/);
			if (match) {
				if (match[1]) {
					amount = parseInt(match[1]);
				}
				if (match[2]) {
					dice = parseInt(match[2]);
				}
				if (match[3]) {
					modifiers = match[3].match(/([+-]\s*\d+)/g);
					for (var i = 0; i < modifiers.length; i++) {
						mod += parseInt(modifiers[i].replace(/\s/g, ''));
					}
				}
			} else {
				parseInt(dice);
			}
		}

		if (isNaN(dice)) {
			return [];
		}

		for (var i = 0; i < amount; i++) {
			/* We dont want to ruin verbose, so we dont skip the for loop */
			if(dice !== 0){
				num = Math.floor(Math.random() * dice + 1);
			}else{
				num = 0;
			}
			results.push(num);
		}

		results = results.sort(function(a, b) {
			return a - b;
		});
		if (mod != 0) {
			results.push(mod);
		}

		return results;
	}
};

if (typeof window != 'undefined') {
	window.d20 = d20;
} else if (typeof exports != 'undefined') {
	for (var k in d20) {
		exports[k] = d20[k];
	}
}

})();
