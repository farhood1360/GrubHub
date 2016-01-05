/*jslint node: true, indent: 4*/

var fs = require('fs');
var exec = require('child_process').exec;
var path = require('path');

var File = require('vinyl');
var glob = require('glob');
var test = require('tape');

var streamEqual = require('stream-equal');
var bufferEqual = require('buffer-equal');

var wrap = require('..');
process.chdir(__dirname);

var transforms = fs.readdirSync(__dirname);
if (transforms) {
    transforms.map(function (transformName, i, arr) {
        var directory = path.resolve(__dirname, transformName);
        var cases = null;
        if (fs.statSync(directory).isDirectory() && transformName !== 'node_modules') {
            cases = glob.sync(directory + '/*.in');
            if (cases) {

                cases.map(function (file, i, arr) {
                    arr[i] = {
                        name: path.basename(file, path.extname(file)),
                        in : file,
                        out: file.substr(0, file.length - 2) + 'out'
                    };
                });
            }
        }
        arr[i] = {
            name: transformName,
            cases: cases
        };
    });
    transforms = transforms.filter(function (transform) {
        return !!transform.cases;
    });
} else {
    transforms = [];
}

transforms.forEach(function (transform) {
    test('wrapping ' + transform.name, function (t) {
        t.plan(4 * transform.cases.length + 3);
        t.on('end', function() {
            exec('npm remove ' + transform.name, function (err, stdout, stderr) {
                if (err) {
                    console.log('Removing module', transform.name, 'failed. You should consider removing it yourself using "npm remove '+transform.name+'"!');
                    console.log('Detail:', stderr);
                }
            });
        });

        exec('npm install ' + transform.name, function (err, stdout, stderr) {
            if (err) {
                console.log(stderr);
                t.fail('Failed to install dependency');
            } else {
                transform.function = require(transform.name);

                transform.cases.forEach(function (testcase) {
                    (function () {
                        var input = fs.createReadStream(testcase.in);
                        var expected = fs.createReadStream(testcase.out);
                        var stream = wrap(transform.function);

                        stream.on('data', function (file) {
                            t.ok(file.isStream(), 'wrapper should return a stream when given a stream');

                            streamEqual(expected, file.contents, function (err, equal) {
                                t.ok(equal, 'output stream should match the expected stream');
                            });
                        });

                        stream.write(new File({
                            path: testcase.name,
                            contents: input
                        }));
                        stream.end();
                    })(this);
                    (function () {
                        var input = fs.readFileSync(testcase.in);
                        var expected = fs.readFileSync(testcase.out);
                        var stream = wrap(transform.function);

                        stream.on('data', function (file) {
                            t.ok(file.isBuffer(), 'wrapper should return a Buffer when given a Buffer');

                            t.ok(bufferEqual(expected, file.contents), 'output Buffer should match the expected Buffer');
                        });

                        stream.write(new File({
                            path: testcase.name,
                            contents: input
                        }));
                        stream.end();
                    })(this);
                });

                (function () {
                    var stream = wrap(transform);
                    var n = 0;

                    stream.on('data', function (file) {
                        t.equal(file.path, 'null.md', 'wrapper should not modify path');
                        t.equal(file.contents, null, 'wrapper should not modify a null stream');
                        n++;
                    });

                    stream.on('end', function () {
                        t.equal(n, 1, 'wrapper should not return multiple entries for one null stream');
                    });

                    stream.write(new File({
                        path: 'null.md',
                        contents: null
                    }));
                    stream.end();
                })(this);
            }
        });
    });
});