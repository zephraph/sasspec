/* @flow */

import sass from 'node-sass';
import path from 'path';

type SassRenderOpts = {
  file: string,
  data: string,
  normalize: ?(str: string) => string,
  sassOpts: any[]
};

export function renderSync(args: SassRenderOpts): string {

  let {file, data, normalize, ...sassOpts} = args;

  if (!normalize) {
    normalize = i => i;
  }

  const opts = {
    includePaths: [ path.dirname(file) ],
    data,
    ...sassOpts
  };

  return normalize(
    sass
      .renderSync(opts)
      .css
      .toString('utf8')
    );
}
