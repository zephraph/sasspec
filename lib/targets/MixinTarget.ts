import * as sass from 'node-sass';
import * as path from 'path';
import { assert } from 'chai';

import { defaultNormalizer, renderSync } from '../sass';
import { BaseTarget } from './BaseTarget';
import { ArgType } from '../types';
import { MixinResult } from '../results';

interface CallObject {
  name?: string;
  args?: string;
  block?: string;
}


export default class MixinTarget extends BaseTarget {

  call({name = this.name, args = '', block = ''}: CallObject = {name: this.name, args: '', block: ''}): MixinResult {

    if (block.length > 0) {
      block = `{${block}}`;
    }

    const data = `
      @import '${path.basename(this.file, '.scss')}';
      @r{ @include ${name}(${args})${block} }`;

    return new MixinResult(
      this,
      renderSync({
        file: this.file,
        data,
        normalizer: defaultNormalizer(4, -1)
      })
    );
  }

  called(): MixinResult {
    return this.call();
  }

  calledWithArgs(...allArgs: ArgType[]): MixinResult {
    let args = allArgs.join(',');
    return this.call({ args });
  }

  calledWithBlock(block: string): MixinResult {
    return this.call({ block });
  }

  calledWithBlockAndArgs(block: string, ...allArgs: ArgType[]): MixinResult {
    let args = allArgs.join(',');
    return this.call({ args, block });
  }

}
