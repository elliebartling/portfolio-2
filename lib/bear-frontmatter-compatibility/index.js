/*
metalsmith-best-assets
adds further meta information to metalsmith files:
	root						- the absolute or relative website root folder
	layout					- sets from default from collection
	isPage					- is an index page
	mainCollection	- the primary collection name
	navmain					- array of main navigation pages
	navsub					- array of secondary navigation pages
*/

var pluginKit = require("metalsmith-plugin-kit")
var path      = require('path')
var fs        = require('fs-extra')
let cheerio   = require('cheerio')
let YAML = require('yamljs');
let _ = require('lodash')

module.exports = function (opts) {
    let metal;

    opts = pluginKit.defaultOptions({
        pattern: ['**/*.*'],
        start: 'front-matter',
        end: '```'
    }, opts);

    return pluginKit.middleware({
        before: function (files, metalsmith, done) {
          metal = metalsmith
          done()
        },
        each: function (filename, fileObject) {
          var contents = fileObject.contents

          var start = contents.indexOf(opts.start)
          var hold = contents.slice(start)
          var end = hold.indexOf(opts.end)
          var data = fileObject.contents.slice(start, start + end)

          var loadableData = data.toString('utf8').replace(opts.start, '')
          var json = YAML.parse(loadableData)
          _.merge(fileObject, json)

          fileObject.contents = contents.slice(0, start) + contents.slice(start + end)

        },
        match: opts.pattern
    });
}
