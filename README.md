# ScreenKeys
This library provides a visual way to display on screen key presses for web demonstrations and recordings.

The keys disappear after half a second by defaulf but it can be costumized.

## How to use
Installation is very simple, just link to the "keys.js" file from this repo.
```<script src="keys.js"></script>```

This includes a few built-in variables to customize your experience:
1. size referes to the font-size (in px);
2. posx is the position in the x axis, can be 'left', 'right' or 'center';
3. posy is the position in the y axis, can be 'top', 'bottom' or 'center';
4. delay refers to the time (in milliseconds) it takes for the toast to disappear;
5. bg is the color of the background of the keys (CSS background-color);
6. txt is the color of the text of the keys (CSS color);