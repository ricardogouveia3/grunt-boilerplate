# Grunt Project Boilerplate

This project uses:

- [Pug](https://pugjs.org/)
- [Sass](http://sass-lang.com/)
- [Grunt](https://gruntjs.com/)
- [Browsersync](https://www.browsersync.io/)

## Getting Started

### Installation

First of all, install the dependencies to run this boilerplate.

- [NodeJS](http://nodejs.org/)
- [Grunt](https://gruntjs.com/)

```sh

# Clone this repository
git clone git@github.com:ricardogouveia3/grunt-boilerplate.git
cd grunt-boilerplate

# install dependencies
npm install

```

After that, you should be good to go :)

### Folders/Files Structure

```sh
├── assets/
│   ├── sass/
│   │   ├── partials/
│   │   │   └── _*.sass
│   │   └── style.sass
│   │   └── variables.sass
│   └── img/
│       └── *.{jpg||png||svg}
├── build/
│   ├── assets/
│   │   ├── css/
│   │   │   └── style.min.css
│   │   └── img/
│   │       └── *.min.{jpg||png||svg}
│   ├── js/
│   │   └── index.min.js
│   ├── *.html
│   └── favicon.ico
├── js/
│   └── *.js
├── pug/
│   └── *.pug
├── .editorconfig
├── .gitignore
├── Gruntfile.js
├── package.json
└── README.md
```

### Tasks

- `grunt concat`: concat `modules/*.js` into `index.min.js`
- `grunt uglify`: uglifies `index.min.js` into itself

- `grunt sass`: build [everything].sass into style.css
- `grunt autoprefixer`: adds vendor prefixes to style.css

- `grunt imagemin`: optimize `*.jpg`,`*.png`,`*.svg` inside `assets/img`

- `grunt pug`: generates `index.html` from `index.pug` + `includes/*.pug`

- `grunt compile`: run concat, uglify, sass, autoprefixer, imagemin, pug; does *not* start server
- `grunt`: run watch [tasks: pug, sass, concat] and start BrowserSync local server

## License

[MIT License](http://ricardogouveia3.mit-license.org/) © Ricardo Álvaro Gouveia Gomes Filho
