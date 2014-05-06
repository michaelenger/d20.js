# d20.js

Javascript library for rolling dice. Supports strings written in a dice-rolling syntax, eg. "d12", "1d20", "4d6", "1d8+1".

[See it in action!](http://michaelenger.github.io/d20.js/)

## Installation

### As part of a web app

Download and include the `d20.js` file somewhere in your HTML page.

```html
<script src="d20.js"></script>
```

### As a Node.js module

Clone the repository into your `~/.node_modules` folder.

```
git clone git@github.com:michaelenger/d20.js.git ~/.node_modules/d20.js
```

Include it into your app.

```javascript
d20 = include('d20.js');
```

## Usage

Now use the `d20` object to roll dice.

```javascript
d20.roll(20); // roll a 20-sided die
d20.roll('4d6'); // roll four 6-sided dice
d20.roll('2d8+1'); // roll two 8-sided dice and add 1 to the result
```

You can get the result as an array of values rather than a single result if you pass `true` along as the second parameter. Note that the results will be sorted in ascending order except for the modifiers which will be in their order of apperance.

```javascript
d20.roll(20, true); // result: [16]
d20.roll('4d6', true); // result: [1, 2, 4, 4]
d20.roll('2d8+1', true); // result: [4, 6, 1]
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

Copyright (c) 2013 The Lonely Coder

This software is provided 'as-is', without any express or implied warranty. In no event will the authors be held liable for any damages arising from the use of this software.

Permission is granted to anyone to use this software for any purpose, including commercial applications, and to alter it and redistribute it freely, subject to the following restrictions:

 * The origin of this software must not be misrepresented; you must not claim that you wrote the original software. If you use this software in a product, an acknowledgment in the product documentation would be appreciated but is not required.
 * Altered source versions must be plainly marked as such, and must not be misrepresented as being the original software.
 * This notice may not be removed or altered from any source distribution.
