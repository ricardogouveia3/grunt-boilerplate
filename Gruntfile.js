module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: ['assets/js/index.min.js'],
        dest: 'assets/js/index.min.js',
      },
    },

    uglify: {
      options: {
        mangle: false
      },
      my_target: {
        files: {
          'assets/js/index.min.js': ['assets/js/index.js']
        }
      }
    },

    sass: {
      build: {
          options: {
            style: 'compressed' //Seems to be the same as minified
          },
        files: {
          'assets/css/style.css': 'assets/css/style.sass',
        }
      }
    },

    autoprefixer: {
      dist: {
        options: {
          map: true
        },
        files: {
          'assets/css/style.css': 'assets/css/style.css',
        }
      }
    },

    pug: {
      compile: {
        files: {
          'index.html':'index.pug'
        }
      },
    },

    watch: {
      pug: {
        files: ['index.pug', 'includes/*.pug'],
        tasks: ['pug'],
      },
      sass: {
        files: ['assets/css/style.sass', 'assets/css/_partials/*.sass'],
        tasks: ['sass'],
      },
      autoprefixer:{
        files: ['assets/css/style.css'],
        tasks: ['autoprefixer'],
      }
      uglify: {
        files: ['assets/js/index.js'],
        tasks: ['uglify'],
      },
      concat: {
        files: ['assets/js/index.min.js'],
        tasks: ['concat'],
      },
    },

    browserSync: {
      dev: {
        bsFiles: {
          src : [
            'assets/css/style.css',
            'assets/js/index.min.js',
            'index.html'
          ]
        },
        options: {
          watchTask: true,
          server: {
            baseDir: "./"
          }
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-pug');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');

  grunt.registerTask('default', ['browserSync', 'watch']);
};