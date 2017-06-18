# sasspec [![Build Status](https://travis-ci.org/zephraph/sasspec.svg?branch=master)](https://travis-ci.org/zephraph/sasspec)

[![Greenkeeper badge](https://badges.greenkeeper.io/zephraph/sasspec.svg)](https://greenkeeper.io/)

A framework to test sass mixins and functions

## API

Testing functions

```javascript
import Sasspec from 'sasspec';

let sass = new Sasspec('/abspath/to/my/scss/file');
sass.func('sum').callWithArgs(1, 2, 3).equals(6);
```

Testing mixins

```javascript
import Sasspec from 'sasspec';

let sass = new Sasspec('/abspath/to/my/scss/file');
sass.mixin('styles').callWithArgs('background', 'red').equals('background: red;');
```
