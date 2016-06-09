import { MixinTarget } from './BaseTargets';

export default class IncludedMixinTarget extends MixinTarget {

  calledWithArgs(...args: string[]): IncludedMixinTarget {
    let argString = args.join(',');
    return this;
  }

  called(): IncludedMixinTarget {
    return this;
  }

  calledWithBlock(block: string): IncludedMixinTarget {
    return this;
  }

  calledWithBlockAndArgs(block: string, ...args: string[]): IncludedMixinTarget {
    return this;
  }
}
