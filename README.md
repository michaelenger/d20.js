# diceroller.js

Javascript library for rolling dice. Supports strings written in a dice-rolling syntax, eg. "d12", "1d20", "4d6", "1d8+1".

[See it in action!](http://michaelenger.github.io/diceroller.js/)

## Usage

Download and include the `diceroller.js` file somewhere in your HTML page (preferably at the bottom).

```html
<script src="diceroller.js"></script>
```

Now use the `diceroller` object to roll dice.

```javascript
diceroller.roll(20); // roll a 20-sided die
diceroller.roll('4d6'); // roll four 6-sided dice
diceroller.roll('2d8+1'); // roll two 8-sided dice and add 1 to the result
```

You can get the result as an array of values rather than a single result if you set the verbose parameter to `true`.

```javascript
diceroller.roll(20, true); // result: [16]
diceroller.roll('4d6', true); // result: [1, 2, 4, 4]
diceroller.roll('2d8+1'); // result: [4, 6, 1]
```

The dice roller will roll a 6-sided die if no dice is specified and defaults to having verbose output off, but this can be modified by setting the appropriate variables.

```javascript
diceroller.defaultDie = 6; // will roll a 20-sided die if no parameter is passed to roll()
diceroller.verboseOutput = true; // will always return an array of results unless false is passed as the second parameter
```

## License

Copyright (c) 2013 The Lonely Coder

This software is provided 'as-is', without any express or implied warranty. In no event will the authors be held liable for any damages arising from the use of this software.

Permission is granted to anyone to use this software for any purpose, including commercial applications, and to alter it and redistribute it freely, subject to the following restrictions:

 * The origin of this software must not be misrepresented; you must not claim that you wrote the original software. If you use this software in a product, an acknowledgment in the product documentation would be appreciated but is not required.
 * Altered source versions must be plainly marked as such, and must not be misrepresented as being the original software.
 * This notice may not be removed or altered from any source distribution.
