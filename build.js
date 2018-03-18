var metalsmith    = require('metalsmith');
var markdown      = require('metalsmith-markdown');
var layouts       = require('metalsmith-layouts');
var permalinks    = require('metalsmith-permalinks');
var collections   = require('metalsmith-collections');
var writemetadata = require('metalsmith-writemetadata');
var metadata      = require('metalsmith-metadata');
var watch         = require('metalsmith-watch');
let assets        = require( 'metalsmith-assets-improved' )
var relative      = require('./lib/relative.js')
var msIf          = require('metalsmith-if');
var dataLoader    = require("metalsmith-data-loader")
var inplace       = require('metalsmith-in-place')
var moremeta      = require('./lib/moremeta')

var shouldWatch = process.env.NODE_ENV == 'production' ? false : true
console.log('Environment is ' + process.env.NODE_ENV)

var templateConfig = {
    engine: 'handlebars',
    directory: 'layouts/',
    partials: 'layouts/partials/',
    default: 'page.html'
  };

metalsmith(__dirname)
  .source('./content')
  .destination('./build')
  .clean(false)
  .use((files, metalsmith, done) => {
    metalsmith._metadata.collections = null
    metalsmith._metadata.posts = null
    metalsmith._metadata.pages = null
    done()
  })
  .use(collections({
    page: {
      pattern: '**/index.*',
      sortBy: 'priority',
      reverse: true,
      refer: false
    },
    posts: {
      pattern: 'posts/*.md',
      metadata: {
        layout: "post.html"
      }
    },
    work: {
      pattern: 'work/*.md',
      metadata: {
        layout: 'work.html',
      }
    }
  }))
  .use(markdown({
    smartypants: true,
    gfm: true,
    tables: true
  }))
  .use(permalinks({ // generate permalinks
    pattern: ':mainCollection/:title'
  }))
  .use(moremeta())
  .use(layouts(templateConfig))
  .use(relative({
    searchFor: '../../assets',
    replaceWith: '/assets'
  }))
  .use(relative({
    searchFor: '../assets',
    replaceWith: '/assets'
  }))
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
  // .use(dataloader({
  //   dataProperty: 'api',
  //
  // }))

  .use(assets({
    src: 'assets',
    dest: 'assets',
    replace: 'old'
  }))
  // .use(msIf(
  //   shouldWatch,
  //   watch({
  //     paths: {
  //       "content/**/*": true,
  //       "layouts/**/*": "**/*",
  //       "assets/**": true
  //     }
  //   })
  // ))
  .build(function(err, files) {
    if (err) { throw err; }
  })
