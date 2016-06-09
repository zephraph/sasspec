import { MixinTarget } from './BaseTargets';

export default class StandAloneMixinTarget extends MixinTarget {

  calledWithArgs(...args: string[]): StandAloneMixinTarget {
    let argString = args.join(',');
    return this;
  }

  called(): StandAloneMixinTarget {
    return this;
  }

  calledWithBlock(block: string): StandAloneMixinTarget {
    return this;
  }

  calledWithBlockAndArgs(block: string, ...args: string[]): StandAloneMixinTarget {
    return this;
  }

}
