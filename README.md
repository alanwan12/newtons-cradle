# Newton's Cradle

A physics demo of a Newton's cradle: five balls hanging from fixed anchor points that you can drag with the mouse.

## What it does
- Uses [Matter.js](https://brm.io/matter-js/) 0.14.2 (MIT license), a bundled copy is included as `matter.js`.
- Creates five circular bodies (radius 20) hung by rigid constraints (length 300) from five static anchor points.
- Balls have no friction or air resistance and a restitution of 1, so collisions are perfectly bouncy. The first ball is given a higher density than the others.
- Drag the balls with the mouse.

## Run it
Open `cradle.html` in a browser. No build step or server needed.

## Files
- `cradle.html` - canvas and script tags
- `cradle.js` - world setup, bodies, constraints, mouse control
- `Circle.js` - small helper that builds a ball body
- `matter.js` - bundled Matter.js 0.14.2

## Notes
- The HTML file also has a `<script>` tag pointing at `../physics/matter-js-0.14.2/build/matter.js` (or `matter-js-0.14.2/build/matter.js`), a path that is not part of this repo. The bundled `matter.js` next to the page is the copy this repo provides, so the extra tag should just log a 404 in the browser console.
