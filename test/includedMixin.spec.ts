import Sasspec from '../src';
import { expect } from 'chai';
import { resolve } from 'path';

describe('includedMixin', () => {
  let sass = new Sasspec(resolve('./test/fixtures/includedMixin.scss'));

  describe('called', () => {

    it('should output a single property', () => {
      sass
        .includedMixin('singleProp')
        .called()
        .equals('background: white;');
    });

    it('should output multiple properties', () => {
      sass
        .includedMixin('doubleProp')
        .called()
        .equals('background: white; color: red;');
    });

  });

  describe('calledWithArgs', () => {

    it('should output given args', () => {
      sass
        .includedMixin('styles')
        .calledWithArgs('(background: brown)')
        .equals('background: brown;');
    });

  });

});
