/* @flow */

import path from 'path';

import { renderSync } from './sass';
import normalize from './normalizer';
import assertions from './assertions';

export default function mixin(file: string, assert) {
  return (name: string) => ({
    called: called(name, file, assert),
    calledWithArgs: calledWithArgs(name, file, assert),
    calledWithBlock: calledWithBlock(name, file, assert),
    calledWithBlockAndArgs: calledWithBlockAndArgs(name, file, assert)
  });
}

const call = ({ name, file, block = '', args = ''}) => {

  if (block.length > 0) {
    block = `{${block}}`;
  }

  const data = `
      @import '${path.basename(file, '.scss')}';
      @r{ @include ${name}(${args})${block} }`;

  return renderSync({
    file,
    data,
    normalize: normalize(4, -1)
  });
};

const called = (name: string, file: string, assert: ?Assert) =>
  () => {
    const result = call({ name, file });
    return assertions(result, assert);
  };

type SassArg = Number | String | Boolean;
const calledWithArgs = (name: string, file: string, assert: Assert) =>
  (...args: SassArg[]) => {
    const result = call({ name, file, args: args.join(',') });
    return assertions(result, assert);
  };

const calledWithBlock = (name: string, file: string, assert: Assert) =>
  (block: string) => {
    const result = call({ name, file, block });
    return assertions(result, assert);
  };

const calledWithBlockAndArgs = (name: string, file: string, assert: Assert) =>
  (block: string, ...args: SassArg[]) => {
    const result = call({ name, file, block, args: args.join(',') });
    return assertions(result, assert);
  };
