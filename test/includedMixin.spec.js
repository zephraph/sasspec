"use strict";
var src_1 = require('../src');
var path_1 = require('path');
describe('includedMixin', function () {
    var sass = new src_1.default(path_1.resolve('./test/fixtures/includedMixin.scss'));
    describe('called', function () {
        it('should output a single property', function () {
            sass
                .includedMixin('singleProp')
                .called()
                .equals('background: white;');
        });
        it('should output multiple properties', function () {
            sass
                .includedMixin('doubleProp')
                .called()
                .equals('background: white; color: red;');
        });
    });
    describe('calledWithArgs', function () {
        it('should output given args', function () {
            sass
                .includedMixin('styles')
                .calledWithArgs('(background: brown)')
                .equals('background: brown;');
        });
    });
});
