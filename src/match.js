/* @flow */

import { renderSync } from './sass';
import fs from 'fs';
import normalizer from './normalizer';

const normal = normalizer(0, 0);

export default function match(file: string, assert): (targetFile: string) => void {
  return (targetFile: string) => {
    const given: string = renderSync({ sassOpts: { file } });
    const expected: string = fs.readFileSync(targetFile, 'utf8');

    assert.equal(normal(given), normal(expected));
  };
}
