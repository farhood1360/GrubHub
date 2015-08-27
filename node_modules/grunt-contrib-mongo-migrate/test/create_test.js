var grunt = require('grunt');

exports['create'] = {
    create: function(test) {
        'use strict';

        var expect, result;

        test.expect(1);

        expect = true;
        result = grunt.file.exists('migrations/0005-undefined.js');
        test.equal(expect, result, 'should create a new migration');

        test.done();
    }
};