/*jslint node: true, indent: 4*/
var through = require('through2');
var applySourcemaps = require('vinyl-sourcemaps-apply');
var WritableStreamBuffer = require('stream-buffers').WritableStreamBuffer;
var ReadableStreamBuffer = require('stream-buffers').ReadableStreamBuffer;

module.exports = function (transform) {
    if (!transform) {
        throw new Error('[gulp-browserify-wrap] You must provide a transform');
    }
    return through.obj(function (file, enc, cb) {
        if (file.isNull()) {
            this.push(file);
            cb();
            //noop
        } else {
            var stream, finish;
            stream = transform(file.path);
            
            finish = (function finish(cb, file, map) {
                if (file.sourceMap && map) {
                    applySourcemaps(file, map);
                }
                
                this.push(file);
                cb();
            }).bind(this, cb);

            if (file.isBuffer()) {
                var source, sink;
                source = new ReadableStreamBuffer();
                sink = new WritableStreamBuffer();
                source.put(file.contents);
                source.pipe(stream).pipe(sink);
                source.on('end', function () {
                    var result = sink.getContents();
                    if (result) {
                        file.contents = result;
                        sink.destroy();
                        source.destroy();
                        finish(file, null);
                    }
                });
                source.destroySoon();
            } else if (file.isStream()) {
                file.contents = file.contents.pipe(stream);

                finish(file, null);
            }
        }
    });
};