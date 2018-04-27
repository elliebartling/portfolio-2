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

module.exports = function (opts) {

    opts = pluginKit.defaultOptions({
        pattern: ['**/**'],
        assetsFolder: './assets',
        dest: 'assets',
    }, opts);

    // Set options for `fs-extra` copy operation--options set to default are marked
    let copyOptions = {
        overwrite: true,                // default
        errorOnExist: false,            // default
        dereference: false,             // default
        preserveTimestamps: true,
      }

    let metal, assets;

    return pluginKit.middleware({
        before: function (files, metalsmith, done) {
          metal = metalsmith
          assets = path.resolve(metal.destination(), opts.dest) // Define our final assets folder

          // Copy over any static assets used in the theme
          fs.ensureDirSync(assets)
          fs.copySync(opts.assetsFolder, assets, copyOptions)
          done()
        },
        each: function (filename, fileObject) {

          // Does this file even include an image? If not, don't do the rest of this stuff.
          var includesImg = fileObject.contents.includes('<img')
          if (!includesImg) { return; }

          // Load it all up into cheerio, grab the images
          let $ = cheerio.load(fileObject.contents)
          let allImgs = $('img')

          // Get the directory where this post/page/whatever is
          let base = path.dirname(path.resolve(metal.source(), filename))

          for (var i = 0; i < allImgs.length; i++) {
            var img = allImgs[i]
            var basename = path.basename(img.attribs.src)       // Keep the filename + extension
            var source = path.resolve(base, img.attribs.src)    // Get the absolute path for this file -- might be in Dropbox, or some other folder
            var destination = path.resolve(assets, basename)    // Create a new filename for the destination file in our final assets folder

            // Copy the image file to the assets folder
            fs.copySync(source, destination, copyOptions)

            var relpath = path.relative(metal.destination(), destination) // Define our img tag's proper src attribute

            // Reformat the src so that it's relative to assets
            img.attribs.src = '/' + relpath
            fileObject.contents = Buffer.from($.html())
          }
        },
        match: opts.pattern
    });
}
