import * as sass from 'node-sass';
import * as path from 'path';

import { BaseTarget } from './BaseTarget';
import { renderSync, defaultNormalizer } from '../sass';
import { ArgType } from '../types';
import { FuncResult } from '../results';

interface CallObject {
  name?: string,
  args?: string
}

export default class FuncTarget extends BaseTarget {

  call({name = this.name, args = ''}: CallObject = {name: this.name, args: ''}): FuncResult {

    const data = `
      @import '${path.basename(this.file, '.scss')}';
      /* #{call('${name}'${args ? ", " + args: ""})} */`;

    return new FuncResult(
      this,
      renderSync({
        file: this.file,
        data,
        normalizer: defaultNormalizer(2, -2)
      })
    );

  }

  called(): FuncResult {
    return this.call({ name: this.name });
  }

  calledWithArgs(...allArgs: ArgType[]): FuncResult {
    let args = allArgs.join(',');
    return this.call({ name: this.name, args });
  }


}
