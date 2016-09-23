/* @flow */

import { renderSync } from './sass';
import assertions from './assertions';
import normalize from './normalizer';

import path from 'path';

type SassFunc = {
  called: Function,
  calledWithArgs: Function
};

type SassFuncWrap = (name: string) => SassFunc;

export default function func(file: string, assert: ?Assert): SassFuncWrap {
  return (name: string) => ({
    called: called(name, file, assert),
    calledWithArgs: calledWithArgs(name, file, assert),
  });
}

const call = (name: string, file: string, args: ?string) => {
  const data = `
      @import '${path.basename(file, '.scss')}'
      /* #{call('${name}'${args ? ', ' + args : ''})} */
    `;

  return renderSync({
    file,
    data,
    normalize: normalize(2, -2)
  });
};

const called = (name: string, file: string, assert: ?Assert) =>
  () => {
    const result = call(name, file);
    return assertions(result, assert);
  };

type SassArg = Number | String | Boolean;
const calledWithArgs = (name: string, file: string, assert: Assert) =>
  (...args: SassArg[]) => {
    const result = call(name, file, args.join(','));
    return assertions(result, assert);
  };
