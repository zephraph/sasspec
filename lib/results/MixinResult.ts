import { assert } from 'chai';

import { BaseResult } from './BaseResult';
import { ArgType } from '../types';
import { MixinTarget } from '../targets';

export default class MixinResult extends BaseResult<MixinTarget> {

  calls(name: string, ...allArgs: ArgType[]): void {
    let args = allArgs.join(',');
    assert.include(this.result, this.target.call({ name, args }).toString());
  }

  callsWithBlock(name: string, block: string, ...allArgs: ArgType[]): void {
    let args = allArgs.join(',');
    assert.include(this.result, this.target.call({ name, block, args }));
  }

  doesNotCall(name: string, ...allArgs: ArgType[]): void {
    let args = allArgs.join(',');
    assert.notInclude(this.result, this.target.call({ name, args }));
  }

}
