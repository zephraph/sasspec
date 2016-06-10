import { assert } from 'chai';

import { SassOptions } from './renderer';

export abstract class TestTarget {

  name: string;
  file: string;
  result: string;
  options: SassOptions;

  constructor(filePath: string, name: string, options?: SassOptions) {
    this.file = filePath;
    this.name = name;
    this.result = null;
    this.options = options;
  }

  withOptions(options: SassOptions) {
    this.options = options;
  }

  equals(given: string): void {
    assert.equal(this.result, given);
  }

  abstract calledWithArgs(...args: string[]): TestTarget;
  abstract called(): TestTarget;

}


export abstract class MixinTarget extends TestTarget {

  abstract calledWithBlock(block: string): MixinTarget;
  abstract calledWithBlockAndArgs(block: string, ...args: string[]): MixinTarget;

}
