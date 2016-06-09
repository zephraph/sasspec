import { TestTarget } from './BaseTargets';
import * as sass from 'node-sass';
import * as path from 'path';

export default class FuncTarget extends TestTarget {

  private call(func: string = 'argFunc', args: string = null): string {
    if (args) {

    }
    return sass.renderSync({
      includePaths: [
        path.dirname(this.file)
      ],
      data: `
        @import '${path.basename(this.file, '.scss')}';
        /* #{call('${this.name}'${args ? ", " + args: ""})} */
      `
    }).css.toString('utf8').trim().slice(2, -2).trim();
  }

  calledWithArgs(...args: string[]): FuncTarget {
    let argString = args.join(',');
    this.result = this.call(undefined, argString);

    // Use sass to call function
    return this;
  }

  called(): FuncTarget {
    this.result = this.call();
    return this;
  }

}
