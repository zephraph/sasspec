import { assert } from 'chai';

export abstract class TestTarget {

  name: string;
  file: string;
  result: string;

  constructor(filePath: string, name: string) {
    this.file = filePath;
    this.name = name;
    this.result = null;
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
