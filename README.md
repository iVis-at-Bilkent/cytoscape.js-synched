cytoscape-synched
================================================================================


## Description

Synchronized layout ([demo](https://iVis-at-Bilkent.github.io/cytoscape.js-synched/demo))

## Dependencies

 * Cytoscape.js ^3.2.0


## Usage instructions

Download the library:

 * via npm: `npm install cytoscape-synched`,
 * via bower: `bower install cytoscape-synched`, or
 * via direct download in the repository (probably from a tag).

Import the library as appropriate for your project:

ES import:

```js
import cytoscape from 'cytoscape';
import synchedLayout from 'cytoscape-synched';

cytoscape.use( synchedLayout );
```

CommonJS require:

```js
let cytoscape = require('cytoscape');
let synchedLayout = require('cytoscape-synched');

cytoscape.use( synchedLayout ); // register extension
```

AMD:

```js
require(['cytoscape', 'cytoscape-synched'], function( cytoscape, synchedLayout ){
  synchedLayout( cytoscape ); // register extension
});
```

Plain HTML/JS has the extension registered for you automatically, because no `require()` is needed.


## API
- `let api = cy.synchedLayout('get')`: get the extension instance
- `api.applyMergedLayout(cy, cy2)`: apply merged layout
- `api.applyUnnamedLayout(cy, cy2)`: apply unnamed layout

## Build targets

* `npm run build` : Build `./src/**` into `cytoscape-synched.js`
* `npm run watch` : Automatically build on changes with live reloading (N.b. you must already have an HTTP server running)
* `npm run dev` : Automatically build on changes with live reloading with webpack dev server
* `npm run lint` : Run eslint on the source

N.b. all builds use babel, so modern ES features can be used in the `src`.


## Publishing instructions

This project is set up to automatically be published to npm and bower.  To publish:

1. Build the extension : `npm run build:release`
1. Commit the build : `git commit -am "Build for release"`
1. Bump the version number and tag: `npm version major|minor|patch`
1. Push to origin: `git push && git push --tags`
1. Publish to npm: `npm publish .`
1. If publishing to bower for the first time, you'll need to run `bower register cytoscape-synched https://github.com/iVis-at-Bilkent/cytoscape.js-synched.git`
1. [Make a new release](https://github.com/iVis-at-Bilkent/cytoscape.js-synched/releases/new) for Zenodo.
