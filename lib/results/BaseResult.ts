import { assert } from 'chai';
import { ArgType } from '../types';
import { BaseTarget } from '../targets';

export abstract class BaseResult<T extends BaseTarget> {

  result: string;
  target: T;

  constructor(target: T, result: string) {
    this.result = result;
    this.target = target;
  }

  toString() {
    return this.result;
  }

  equals(given: ArgType): void {
    assert.equal(this.result, given);
  }

  doesNotEqual(given: ArgType): void {
    assert.notEqual(this.result, given);
  }

  isTrue(): void {
    assert.isTrue(this.result === 'true');
  }

  isFalse(): void {
    assert.isTrue(this.result === 'false');
  }

}
