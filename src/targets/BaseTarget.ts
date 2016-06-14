import { assert } from 'chai';
import * as path from 'path';

import { SassOptions, defaultNormalizer, renderSync } from '../sass';
import { ArgType } from '../types';
import { BaseResult } from '../results';


export abstract class BaseTarget {

  name: string;
  file: string;
  options: SassOptions;

  constructor(filePath: string, name: string, options?: SassOptions) {
    this.file = filePath;
    this.name = name;
    this.options = options;
  }

  withOptions(options: SassOptions) {
    this.options = options;
  }

  abstract called(): BaseResult<BaseTarget>;
  abstract calledWithArgs(...args: ArgType[]): BaseResult<BaseTarget>;

}
