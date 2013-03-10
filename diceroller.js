/**
 * diceroller.js
 *
 * Javascript library for rolling dice. Supports strings written in a dice-rolling syntax, eg. "d20", "4d6", "1d8+1".
 *
 * @author Michael Enger <mike@thelonelycoder.com>
 * @licence ZLIB
 */
(function() {
"use strict";

var diceroller = {

	/**
	 * Default dice to roll.
	 *
	 * @var number
	 */
	defaultDie: 6,

	/**
	 * Default setting for the verbose parameter.
	 *
	 * @var boolean
	 */
	verboseOutput: false,

	/**
	 * Roll a number of dice and return the result.
	 *
	 * @param dice    Type of dice to roll, can be represented in various formats:
	 *                 - a number (6, 12, 42)
	 *                 - dice syntax (d20, 4d6, 2d8+2)
	 * @param verbose Returns the full amount of dice results rather than a single one
	 * @return number
	 */
	roll: function(dice, verbose) {
		var amount = 1,
			mod = 0
		dice = dice || this.defaultDie;
		verbose = verbose || this.verboseOutput;

		if (typeof dice == 'string') {
			var result = dice.match(/^(\d+)?d(\d+)([+-]\d+)?$/);
			if (result) {
				if (result[1]) {
					amount = parseInt(result[1]);
				}
				if (result[2]) {
					dice = parseInt(result[2]);
				}
				if (result[3]) {
					mod = parseInt(result[3]);
				}
			} else {
				parseInt(dice);
			}
		}

		var num = 0,
			result = [];
		for (var i = 0; i < amount; i++) {
			num = Math.round(Math.random() * (dice - 1) + 1);
			result.push(num);
		}

		result = result.sort(function(a, b) {
			return a - b;
		});
		if (mod != 0) {
			result.push(mod);
		}

		if (!verbose) {
			num = 0;
			for (var i in result) {
				num += result[i];
			}
			result = num;
		}

		return result;
	}
};

if (typeof window != 'undefined')
	window.diceroller = diceroller;

})();
