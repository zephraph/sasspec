import sasspec from '../src';
import test from 'tape';

const sass = assert => {
  assert.plan(1);
  return sasspec('./test/fixtures/mixin.scss', assert);
};

test('mixin.called should output a single prop', assert => {
  sass(assert)
    .mixin('singleProp')
    .called()
    .equal('background: white;');
});

test('mixin.called should output multiple props', assert => {
  sass(assert)
    .mixin('doubleProp')
    .called()
    .equal('background: white; color: red;');
});

test('mixin.calledWithArgs should output given args', assert => {
  sass(assert)
    .mixin('styles')
    .calledWithArgs('(background: brown)')
    .equal('background: brown;');
});

test('mixin.calledWithBlock should output included block', assert => {
  sass(assert)
    .mixin('block')
    .calledWithBlock('div { output: test; }')
    .equal('div { output: test; }');
});

test('mixin.calledWithBlockAndArgs', assert => {
  sass(assert)
    .mixin('blockWithArgs')
    .calledWithBlockAndArgs('div { output: test; }', 'hello', 'world')
    .equal('args: hello, world; div { output: test; }');
});
