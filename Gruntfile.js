module.exports = function(grunt) {

  // Project configuration.
  const mozjpeg = require('imagemin-mozjpeg');
  const imagemin = require('imagemin');
  const imageminMozjpeg = require('imagemin-mozjpeg');
  const imageminOptipng = require('imagemin-optipng');
  const imageminSvgo = require('imagemin-svgo');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concat: {
      options: { separator: ';' },
      dist: {
        src: ['js/**/*.js'],
        dest: 'build/js/index.min.js',
      },
    },

    uglify: {
      my_target: { files: { 'build/js/index.min.js':'build/js/index.min.js'} }
    },

    sass: {
      build: {
        options: { style: 'compressed' },
        files: { 'assets/css/style.min.css':'assets/sass/style.sass' }
      }
    },

    autoprefixer: {
      dist: {
        options: { map: true },
        files: { 'build/assets/css/style.min.css':'build/assets/css/style.min.css' }
      }
    },

    imagemin: {
      dynamic: {
        options: {
          optimizationLevel: 3,
          svgoPlugins: [{removeViewBox: false}],
          use: [mozjpeg(), imageminOptipng(), imageminSvgo()]
        },
        files: [{
          expand: true,
          cwd: 'assets/img/',
          src: ['**/*.{png,jpg,gif,svg}'],
          dest: 'build/assets/img/'
        }]
      }
    },

    pug: {
      compile: {
        files: [{
            expand: true,
            cwd: 'pug/',
            src: ['**/*.pug'],
            dest: 'build/',
            ext: '.html',
            extDot: 'first'
          }],
      },
    },

    watch: {
      pug: {
        files: ['pug/**/*.pug'],
        tasks: ['pug'],
      },
      sass: {
        files: ['assets/sass/**/*.sass'],
        tasks: ['sass'],
      },
      concat: {
        files: ['js/**/*.js'],
        tasks: ['concat'],
      },
    },

    browserSync: {
      dev: {
        bsFiles: {
          src : [
            'build/assets/css/style/min.css',
            'build/js/index.min.js',
            'build/index.html'
          ]
        },
        options: {
          watchTask: true,
          server: {
            baseDir: "build/"
          }
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-pug');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');

  grunt.registerTask('compile', ['concat', 'uglify', 'sass', 'autoprefixer', 'imagemin', 'pug']);
  grunt.registerTask('default', ['browserSync', 'watch']);
};
