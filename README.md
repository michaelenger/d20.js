# d20.js

Javascript library for rolling RPG dice. Supports dice notation such as "4d6" and "d20+2".

[![npm version](http://img.shields.io/npm/v/d20.svg?style=flat)](https://npmjs.org/package/d20)
[![Build Status](http://img.shields.io/travis/michaelenger/d20.js.svg?style=flat)](https://travis-ci.org/michaelenger/d20.js)

## Installation

### In the browser

Download the files from [GitHub](https://github.com/michaelenger/d20.js) and include the `d20.js` file somewhere in your HTML page.

```html
<script src="path/to/d20.js"></script>
```

### As a Node.js module

Install via `npm`.

```shell
npm install d20
```

`require` it in your app.

```javascript
var d20 = require('d20');
```

### As a standalone tool

Install it globally.

```shell
npm install -g d20
```

Run the `d20` command with any number of desired dice rolls after.

```shell
d20 4d6
d20 d20 1d8+1 d4
```

## Usage

### As a library

Both methods of using the library provides a `d20` object with the `roll()` method which is used to roll dice.

```javascript
d20.roll(20); // roll a 20-sided die
d20.roll('4d6'); // roll four 6-sided dice
d20.roll('2d8+1'); // roll two 8-sided dice and add 1 to the result
d20.roll('1d8 +1 +2 -20'); // roll an 8-sided die with multiple modifiers
```

You can get the result as an array of values rather than a single result if you use the `verboseRoll` function. Note that the results will be sorted in ascending order except for the modifiers which will be in their order of apperance.

```javascript
d20.verboseRoll(20);
d20.verboseRoll('4d6');
d20.verboseRoll('2d8+1');
d20.verboseRoll('1d8 +1 +2 -20');
```

Alternatively you can just pass `true` as the second paramenter to the `roll` function.

```javascript
d20.roll(20, true);
d20.roll('4d6', true);
d20.roll('2d8+1', true);
d20.roll('1d8 +1 +2 -20', true);
```

### As a standalone tool

The standalone tool takes any number of dice roll commands and will return each one separately.

```shell
d20 4d6 2d8 d10
```

If you want more verbose output (full list of results per dice), you can use the `--verbose` option.

```shell
d20 --verbose 3d12
```

If you add the `--total` option, it will return the sum of all the dice rolls.

```shell
d20 --total d20 1d8+1 d4
```

## Testing

The library can be tested by installing the dependencies and running `npm test`:

```bash
npm install
npm test
```
