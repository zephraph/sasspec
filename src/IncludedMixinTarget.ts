import { MixinTarget } from './BaseTargets';
import * as sass from 'node-sass';
import * as path from 'path';

import { defaultNormalizer, renderSync } from './renderer';

export default class IncludedMixinTarget extends MixinTarget {

  private call(args: string = ""): string {

    const data = `
      @import '${path.basename(this.file, '.scss')}';
      @r{ @include ${this.name}(${args}) }`;

    return renderSync({
      file: this.file,
      data,
      normalizer: defaultNormalizer(4, -1)
    });
  }

  called(): IncludedMixinTarget {
    this.result = this.call();
    return this;
  }

  calledWithArgs(...args: string[]): IncludedMixinTarget {
    let argString = args.join(',');
    this.result = this.call(argString);
    return this;
  }

  calledWithBlock(block: string): IncludedMixinTarget {
    return this;
  }

  calledWithBlockAndArgs(block: string, ...args: string[]): IncludedMixinTarget {
    return this;
  }
}
