var metalsmith    = require('metalsmith');
var markdown      = require('metalsmith-markdown');
var layouts       = require('metalsmith-layouts');
var permalinks    = require('metalsmith-permalinks');
var collections   = require('metalsmith-collections');
var writemetadata = require('metalsmith-writemetadata');
var metadata      = require('metalsmith-metadata');
var watch         = require('metalsmith-watch');
let assets        = require('./lib/lazy-assets')
var relative      = require('./lib/relative.js')
var msIf          = require('metalsmith-if');
var dataLoader    = require("metalsmith-data-loader")
var inplace       = require('metalsmith-in-place')
var moremeta      = require('./lib/moremeta')
var filter        = require('metalsmith-filter');
var publish       = require('metalsmith-publish');
var metallic = require('metalsmith-metallic');
var replace = require('metalsmith-text-replace');


var args = require('args')
var bearfrontmatter = require('./lib/bear-frontmatter-compatibility')

args.option('watch', 'Whether or not to watch content assets for changes', false)
const flags = args.parse(process.argv)

var shouldWatch = process.env.NODE_ENV == 'production' ? false : flags.watch
// console.log('Should watch? ' + shouldWatch)

var templateConfig = {
    engine: 'handlebars',
    directory: 'layouts/',
    partials: 'layouts/partials/',
    default: 'page.html'
  };

metalsmith(__dirname)
  .source('./content')
  .destination('./build')
  .clean(true)
  .use((files, metalsmith, done) => {
    metalsmith._metadata.collections = null
    metalsmith._metadata.posts = null
    metalsmith._metadata.pages = null
    done()
  })
  .use(filter('**/*.md', { debug: false }))
  .use(bearfrontmatter())
  .use(collections({
    page: {
      pattern: '**/index.*',
      sortBy: 'priority',
      reverse: true,
      refer: false
    },
    posts: {
      pattern: 'posts/*.md',
      sortBy: 'date',
      metadata: {
        layout: "post.html"
      }
    },
    work: {
      pattern: 'work/*.md',
      sortBy: 'priority',
      metadata: {
        layout: 'work.html',
      }
    }
  }))
  .use(publish())
  .use(markdown({
    smartypants: true,
    gfm: true,
    tables: true
  }))
  .use(replace({
    '**/**': [
      {
        find: /\[row\]/g,
        replace: "<div class='row'>"
      },{
        find: /\[row center\]/g,
        replace: "<div class='row align-items-center'>"
      },{
        find: /\[row narrow\]/g,
        replace: "<div class='row narrow'>"
      },{
        find: /\[col\]/g,
        replace: "<div class='col'>"
      },{
        find: /\[\/col\]/g,
        replace: "</div>"
      },{
        find: /\[\/row\]/g,
        replace: "</div>"
      },{
        find: /\[spacer\]/g,
        replace: "<div class='spacer'></div>"
      }
    ]
    }))
  .use(assets({
    dest: 'assets',
    assetsFolder: './assets',
    replace: 'old'
  }))
  // .use(metallic())
  // .use(mediaMetadata())
  // .use(imageDimensions({
  //   overwrite: true
  // }))
  .use(permalinks({ // generate permalinks
    pattern: ':mainCollection/:title'
  }))
  .use(moremeta())
  .use(layouts(templateConfig))
  .use(writemetadata({
    pattern: ['**/*'],
    ignorekeys: ['next', 'previous', 'stats', 'mode'],
    bufferencoding: 'utf8',

    // Write manifest APIs for posts
    collections: {
      posts: {
        output: {
          path: 'api/posts.json',
          asObject: true,
        },
        ignorekeys: ['stats', 'mode', 'next', 'previous']
      },
      work: {
        output: {
          path: 'api/work.json',
          asObject: true,
          metadata: {
            "type": "collection"
          }
        },
        ignorekeys: ['stats', 'mode', 'next', 'previous']
      }
    }
  }))
  .use(msIf(
    shouldWatch,
    watch({
      paths: {
        "content/**/*": true,
        "layouts/**/*": "**/*",
        "assets/**": true
      }
    })
  ))
  .build(function(err, files) {
    if (err) { throw err; }
  })
