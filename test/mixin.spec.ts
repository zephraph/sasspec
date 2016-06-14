import Sasspec from '../src';

import { assert } from 'chai';
import { resolve } from 'path';

describe('MixinTarget', () => {
  const sass = new Sasspec(resolve('./test/fixtures/mixin.scss'));

  describe('called', () => {

    it('should output a single property', () => {
      sass
        .mixin('singleProp')
        .called()
        .equals('background: white;');
    });

    it('should output multiple properties', () => {
      sass
        .mixin('doubleProp')
        .called()
        .equals('background: white; color: red;');
    });

  });

  describe('calledWithArgs', () => {

    it('should output given args', () => {
      sass
        .mixin('styles')
        .calledWithArgs('(background: brown)')
        .equals('background: brown;');
    });

    describe('calls', () => {

      it('should contain style mixin results', () => {
        let arg = '(font-weight: bold)';
        sass
          .mixin('calls')
          .calledWithArgs(arg)
          .calls('styles', arg);
      });

    });

    describe('doesNotCall', () => {

      it('should not contain style mixin results', () => {
        let arg = '(font-weight: bold)';
        sass
          .mixin('doesNotCall')
          .called()
          .doesNotCall('styles', arg);
      });

    });

  });

  describe('calledWithBlock', () => {

    it('should output an included block', () => {
      sass
        .mixin('block')
        .calledWithBlock('div { output: test; }')
        .equals('div { output: test; }');
    });

  });

  describe('calledWithBlockAndArgs', () => {

    it('should output args and a block', () => {
      sass
        .mixin('blockWithArgs')
        .calledWithBlockAndArgs('div { output: test; }', 'hello', 'world')
        .equals('args: hello, world; div { output: test; }');
    });

  });

});
