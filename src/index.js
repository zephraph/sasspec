/* @flow */

import func from './func';
import mixin from './mixin';

type Assert = {
  equals: Function,
  deepEquals: Function,
  ok: Function
};

type Sasspec = {
  func: Function,
  mixin: Function
};

export default function sasspec(file: string, assert: ?Assert): Sasspec {

  return {
    func: func(file, assert),
    mixin: mixin(file, assert)
  };

}
