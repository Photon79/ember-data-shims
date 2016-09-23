Ember Data Shims
===============

About
-----

Ember Data Shims (EDS) contain all the shims for Ember Data.

Usage
-----

Simply import any of the shims as an ES6 module:

```js
import Model from 'ember-data/model';
```

Some of the shims have named exports (instead of/in addition to a `default` export):

```js
import { PromiseObject, PromiseArray } from 'ember-data/promises';
```

License
-------

Ember Data Shims is [MIT Licensed](https://github.com/Photon79/ember-data-shims/blob/master/LICENSE.md).
