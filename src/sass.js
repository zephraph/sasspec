/* @flow */

import sass from 'node-sass';
import path from 'path';

type SassRenderOpts = {
  file: ?string,
  data: string,
  normalize: ?(str: string) => string,
  sassOpts: Object
};

const sassRenderer = (opts: Object): string =>
  sass
    .renderSync(opts)
    .css
    .toString('utf8');

export function renderSync(args: SassRenderOpts, render: Function = sassRenderer): string {

  let {file, data, normalize, sassOpts} = args;

  if (!normalize) {
    normalize = i => i;
  }

  const opts = {
    includePaths: file
      ? [ path.dirname(file) ]
      : [],
    data,
    ...sassOpts
  };

  return normalize(render(opts));
}
