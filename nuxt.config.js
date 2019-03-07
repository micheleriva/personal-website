const pkg = require('./package')

const OGDescription = 'Software Engineer, Fullstack Developer and OpenSource Contributor';
const OGImage = '/imgs/micheleriva-ogimg.png'

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Michele Riva | Software Engineer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport',                         content: 'width=device-width, initial-scale=1, maximum-scale=2' },
      { hid:  'description', name: 'description', content: OGDescription },
      { name: 'keywords',                         content: 'software engineer, node, nodejs, go, golang, javascript, es6, haskell, erlang, elixir, reasonml, development' },
      { name: 'theme-color',                      content: '#050817' },

      { property: 'og:type',        content: 'website' },
      { property: 'og:title',       content: 'Michele Riva | Software Engineer' },
      { property: 'og:description', content: OGDescription },
      { property: 'og:image',       content: OGImage },

      { property: 'twitter:site',        content: '@MicheleRiva95' },
      { property: 'twitter:card',        content: 'summary_large_image' },
      { property: 'twitter:url',         content: 'https://www.micheleriva.it' },
      { property: 'twitter:image',       content: OGImage },
      { property: 'twitter:description', content: OGDescription }
    ],
    link: [
      { rel: 'manifest',                         href: '/manifest.json' },
      { rel: 'icon',       type: 'image/x-icon', href: '/imgs/favicons/ico-16.png' },
      { rel: 'stylesheet', type: 'text/css',     href: 'https://fonts.googleapis.com/css?family=Raleway:300,500,600,700,900' },
      { rel: 'stylesheet', type: 'text/css',     href: '/css/animate.css' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#9708CC' },

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
    }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/pwa'
  ],

  /*
  ** PWA Manifest
  */
  manifest: {
    name: 'MicheleRiva',
    short_name: 'MicheleRiva',
    description: OGDescription,
    start_url: '.',
    background_color: '#050817',
    lang: 'en'
  },

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
