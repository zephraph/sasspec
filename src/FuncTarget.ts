import { TestTarget } from './BaseTargets';
import * as sass from 'node-sass';
import * as path from 'path';

import { renderSync, defaultNormalizer } from './renderer';

export default class FuncTarget extends TestTarget {

  private call(args: string = null): string {

    const data = `
      @import '${path.basename(this.file, '.scss')}';
      /* #{call('${this.name}'${args ? ", " + args: ""})} */`;

    return renderSync({
      file: this.file,
      data,
      normalizer: defaultNormalizer(2, -2)
    });

  }

  called(): FuncTarget {
    this.result = this.call();

    return this;
  }

  calledWithArgs(...args: string[]): FuncTarget {
    let argString = args.join(',');
    this.result = this.call(argString);

    return this;
  }


}
