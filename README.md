# d20.js

Javascript library for rolling RPG dice. Supports dice notation such as "4d6" and "d20+2".

## Installation

### In the browser

Download the files from [GitHub](https://github.com/michaelenger/d20.js) and include the `d20.js` file somewhere in your HTML page.

```html
<script src="path/to/d20.js"></script>
```

### As a Node.js module

Add the git repository as a dependency in your `package.json` file (you can specify a version branch instead of "master" if you want a specific version).

```javascript
{
	"dependencies": {
		"d20.js": "git://github.com/michaelenger/d20.js.git#master"
	}
}
```

`require` it in your app.

```javascript
var d20 = require('d20.js');
```

## Usage

Both methods of using the library provides a `d20` object with the `roll()` method which is used to roll dice.

```javascript
d20.roll(20); // roll a 20-sided die
d20.roll('4d6'); // roll four 6-sided dice
d20.roll('2d8+1'); // roll two 8-sided dice and add 1 to the result
d20.roll('1d8 +1 +2 -20'); // roll an 8-sided die with multiple modifiers
```

You can get the result as an array of values rather than a single result if you pass `true` along as the second parameter. Note that the results will be sorted in ascending order except for the modifiers which will be in their order of apperance.

```javascript
d20.roll(20, true);
d20.roll('4d6', true);
d20.roll('2d8+1', true);
d20.roll('1d8 +1 +2 -20', true);
```

The dice roller will roll a 6-sided die if no dice is specified and defaults to having verbose output off, but this can be modified by setting the appropriate variables.

```javascript
d20.defaultDie = 6; // will roll a 6-sided die if no parameter is passed to roll()
d20.verboseOutput = true; // will always return an array of results unless false is passed as the second parameter
```

## Testing

The library can be tested by installing the dependencies and running `npm test`:

```bash
npm install
npm test
```

## License

Copyright (c) 2014 Michael Enger

This software is provided 'as-is', without any express or implied warranty. In no event will the authors be held liable for any damages arising from the use of this software.

Permission is granted to anyone to use this software for any purpose, including commercial applications, and to alter it and redistribute it freely, subject to the following restrictions:

 * The origin of this software must not be misrepresented; you must not claim that you wrote the original software. If you use this software in a product, an acknowledgment in the product documentation would be appreciated but is not required.
 * Altered source versions must be plainly marked as such, and must not be misrepresented as being the original software.
 * This notice may not be removed or altered from any source distribution.
