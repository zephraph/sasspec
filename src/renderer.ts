import * as sass from 'node-sass';
import * as path from 'path';

import { merge } from 'lodash';
import { TestTarget } from './BaseTargets';

export interface SassOptions {
  outputStyle?: string
}

const defaultOptions: SassOptions = {
  outputStyle: 'compact'
};

interface SassRenderOpts {
  file: string,
  data: string,
  sassOpts?: SassOptions,
  normalizer(string): string
}

export function defaultNormalizer(sliceStart: number, sliceEnd: number) {
  return str => str.trim().slice(sliceStart, sliceEnd).trim().replace(/\s\s+/g, ' ');
}

export function renderSync(renderOpts: SassRenderOpts) {

    const {
      file,
      data,
      normalizer,
      sassOpts = {}
    } = renderOpts;

    const opts = merge({}, defaultOptions, sassOpts, {
      includePaths: [
        path.dirname(file),
      ],
      data
    });

    return normalizer(
      sass
        .renderSync(opts)
        .css
        .toString('utf8')
    );
}
