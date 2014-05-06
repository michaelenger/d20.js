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

		it('will roll a 6-sided die if no value is passed', function() {
			var result = d20.roll();
			expect(result).toBeGreaterThan(0);
			expect(result).toBeLessThan(7);
		});

		it('allows you to specify the default value', function() {
			d20.defaultDie = 20;
			var result = d20.roll();
			expect(result).toBeGreaterThan(0);
			expect(result).toBeLessThan(21);
		});

		it('allows you to get all the dice rolls as output', function() {
			var result = d20.roll('5d10', true);
			expect(result.length).toBe(5);
		});

		it('will append the modifier to the end of the result list', function() {
			var result = d20.roll('5d10+2', true);
			expect(result.length).toBe(6);
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
	});

})();
