# sasspec

A framework to test sass mixins and functions

```javascript
import Sasspec from 'sasspec';

let sass = new Sasspec('/abspath/to/my/scss/file');
sass.func('sum').callWithArgs(1, 2, 3).equals(6);
```
