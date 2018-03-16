var debug     = require("debug")("metalsmith-myplugin")
var pluginKit = require("metalsmith-plugin-kit")
var path      = require('path')
var multimatch = require("multimatch")
var fs        = require('fs')
var replace   = require('buffer-replace')

module.exports = function relative(opts) {
    opts = pluginKit.defaultOptions({
        pattern: ['**/**'],
        searchFor: '',
        replaceWith: ''
    }, opts);

    return pluginKit.middleware({
        each: function (filename, fileObject) {
          var old = fileObject.contents
          var content = replace(old, opts.searchFor, opts.replaceWith)
          fileObject.contents = content
        },
        match: opts.pattern
    });
}
