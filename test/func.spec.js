/* @flow */

import test from 'tape';
import sasspec from '../src';

const sass = assert => {
  assert.plan(1);
  return sasspec('./test/fixtures/func.scss', assert);
};

test('function should be called with no args', assert => {
  sass(assert)
    .func('noArgs')
    .called()
    .equal('noArgs');
});

test('function should be called with string arg', assert => {
  sass(assert)
    .func('withArgs')
    .calledWithArgs('test')
    .equal('test');
});

test('function should return multiple string args', assert => {
  sass(assert)
    .func('withArgs')
    .calledWithArgs('test', 'this')
    .equal('test, this');
});

test('function should return a list argument', assert => {
  sass(assert)
    .func('withArgs')
    .calledWithArgs('(test, 1, 2)')
    .equal('test, 1, 2');
});

test('function should return a map argument', assert => {
  sass(assert)
    .func('withArgs')
    .calledWithArgs('(test: this)')
    .equal('(test: this)');
});
