import Sasspec from '../lib';
import { expect } from 'chai';
import { resolve } from 'path';

describe('func', () => {
  let sass = new Sasspec(resolve('./test/fixtures/func.scss'));

  describe('called', () => {

    it('should call a function with no args', () => {
      sass.func('noArgs').called().equals('noArgs');
    });

  });

  describe('calledWithArgs', () => {

    it('should return a passed string argument', () => {
      sass.func('withArgs').calledWithArgs('test').equals('test');
    });

    it('should return multiple string arguments', () => {
      sass.func('withArgs').calledWithArgs('test', 'this').equals('test, this');
    });

    it('should return true given a true value', () => {
      sass.func('withArgs').calledWithArgs(true).isTrue();
    });

    it('should return false given a false value', () => {
      sass.func('withArgs').calledWithArgs(false).isFalse();
    });

  });

});
