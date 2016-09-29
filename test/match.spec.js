/* @flow */

import test from 'tape';
import sasspec from '../src';

const sass = assert => {
  assert.plan(1);
  return sasspec('./test/fixtures/match.given.scss', assert);
};

test('match should pass when results match', assert => {
  sass(assert)
    .match('./test/fixtures/match.expected.css');
});
