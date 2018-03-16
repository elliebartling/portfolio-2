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

metalsmith(__dirname)
  .source('./content')
  .destination('./build/api')
  .clean(true)
  .use((files, metalsmith, done) => {
    metalsmith._metadata.collections = null
    metalsmith._metadata.posts = null
    metalsmith._metadata.pages = null
    done()
  })
  .use(collections({
    posts: {
      pattern: 'posts/*.md',
      sortBy: 'date',
      reverse: true
    },
    work: {
      pattern: 'work/*.md',
      sortBy: 'order',
      reverse: false
    }
  }))
  .use(markdown())
  // .use(permalinks())
  // .use(layouts({
  //   engine: 'handlebars'
  // }))
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
          path: 'posts.json',
          asObject: true,
          metadata: {
            "type": "collection"
          }
        },
        ignorekeys: ['stats', 'mode']
      },
      work: {
        output: {
          path: 'work.json',
          asObject: true,
          metadata: {
            "type": "collection"
          }
        },
        ignorekeys: ['stats', 'mode']
      }
    }
  }))
  .use(assets({
    src: 'assets',
    dest: '../assets'
  }))
  .use(watch({
    paths: {
      "content/**/*": true,
      "layouts/**/*": "**/*",
      "assets/**": true
    }
  }))
  .build(function(err, files) {
    if (err) { throw err; }
  })
