/**
 * Tests for d20.js
 *
 * Uses mocha and expect.
 *
 * @see http://visionmedia.github.io/mocha/
 */
(function() {
	"use strict";

	var d20 = require('../d20.js'),
		expect = require('expect');

	describe('d20.js', function() {
		it('rolls a die when a numerical value is passed', function() {
			var result = d20.roll(6);
			expect(result).toBeGreaterThan(0);
			expect(result).toBeLessThan(7);
		});

		it('rolls a die when a numerical string value is passed', function() {
			var result = d20.roll('6');
			expect(result).toBeGreaterThan(0);
			expect(result).toBeLessThan(7);
		});

		it('rolls a die when a numerical value is passed prefixed with a "d"', function() {
			var result = d20.roll('d6');
			expect(result).toBeGreaterThan(0);
			expect(result).toBeLessThan(7);
		});

		it('rolls multiple dice when the value is preceeded by the amount of dice', function() {
			var result = d20.roll('4d6');
			expect(result).toBeGreaterThan(3);
			expect(result).toBeLessThan(25);
		});

		it('allows for modifiers to be passed', function() {
			var result = d20.roll('4d6+3');
			expect(result).toBeGreaterThan(6);
			expect(result).toBeLessThan(28);
		});

		it('will throw an exception if no value is passed', function() {
			expect(function() {
				d20.roll();
			}).toThrow('Missing dice parameter');
		});

		it('allows you to get all the dice rolls as output', function() {
			var result = d20.verboseRoll('5d10');
			expect(result.length).toBe(5);
		});

		it('allows you to get all the dice rolls as output (variant)', function() {
			var result = d20.roll('5d10', true);
			expect(result.length).toBe(5);
		});

		it('will append the modifier to the end of the result list', function() {
			var result = d20.roll('5d10+2', true);
			expect(result.length).toBe(6);
			expect(result[5]).toBe(2);
		});

		it('doesn\'t care about spaces', function() {
			var result = d20.roll(' 2 d 8 + 1');
			expect(result).toBeGreaterThan(2);
			expect(result).toBeLessThan(18);
		});

		it('should support multiple modifiers', function() {
			var result = d20.roll(' 1d1 +1 +2 -3 ');
			expect(result).toBe(1);
		});

		it('should be consistent', function() {
			var result;
			for (var i = 0; i < 100; i++) {
				result = d20.roll('d6+1');
				expect(result).toBeGreaterThan(1);
				expect(result).toBeLessThan(8);
			}
		});

		it('returns 0 if passed undescipherable text', function() {
			var result = d20.roll('i can have a banana?');
			expect(result).toBe(0);
		});

		it('returns empty array if passed undescipherable text', function() {
			var result = d20.roll('did someone steal your sweetroll?', true);
			expect(result.length).toBe(0);
		});
	});

})();
