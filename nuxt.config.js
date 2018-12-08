const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Michele Riva | Software Engineer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport',                         content: 'width=device-width, initial-scale=1' },
      { hid:  'description', name: 'description', content: 'Michele Riva | Software Engineer, Fullstack Developer, OpenSource Contributor' },
      { name: 'keywords',                         content: 'software engineer, node, nodejs, go, golang, javascript, es6, haskell, reasonml, development' },
      { name: 'theme-color',                      content: '#050817' },

      { property: 'og:type',        content: 'website' },
      { property: 'og:title',       content: 'Michele Riva | Software Engineer' },
      { property: 'og:description', content: 'Software Engineer, Fullstack Developer and OpenSource Contributor' },
      { property: 'og:image',       content: '/imgs/micheleriva-ogimg.jpg' },

      { property: 'twitter:site',        content: '@MicheleRiva95' },
      { property: 'twitter:card',        content: 'summary_large_image' },
      { property: 'twitter:url',         content: 'https://www.micheleriva.it' },
      { property: 'twitter:image',       content: '/imgs/micheleriva-ogimg.jpg' },
      { property: 'twitter:description', content: 'Software Engineer, Fullstack Developer and OpenSource Contributor' }
    ],
    link: [
      { rel: 'manifest',                         href: '/manifest.json' },
      { rel: 'icon',       type: 'image/x-icon', href: '/imgs/favicons/ico-16.png' },
      { rel: 'stylesheet', type: 'text/css',     href: '/css/animate.css' },
      { rel: 'stylesheet', type: 'text/css',     href: '/css/fontAwesome.css'}
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { 
      src: '~plugins/ga.js', 
      ssr: false 
    },
    {
      src: '~plugins/scrollto.js',
      ssr: false
    }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
