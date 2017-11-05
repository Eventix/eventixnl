module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    mkdir: {
      all: {
        options: {
          create: ['public/css', 'public/js']
        }
      }
    },
    sass: {
      options: {
        sourceMap: true,
        precision: 8 // required by bootstrap-sass
      },
      dist: {
        files: {
          'public/css/main.css': 'stylesheets/main.scss'
        }
      }
    },
    browserify: {
      production: {
        src:  ['scripts/main.js'],
        dest: 'public/js/bundle.js'
      }
    },
    preprocess: {
      all_from_dir: {
        src: ['**/*.html', '!**/_*.html'],
        cwd: 'pages',
        ext: '.html',
        dest: 'public',
        expand: true
      }
    },
    watch: {
      sass: {
        files: ['stylesheets/**'],
        tasks: ['sass']
      },
      js: {
        files: ['scripts/**'],
        tasks: ['browserify']
      },
      html: {
        files: ['pages/**'],
        tasks: ['preprocess']
      }
    },
    uglify: {
      dist: {
        options: {

        },
        files: [{
          expand: true,
          src: ['public/**/*.js'],
          dest: ''
        }]
      }
    },
    cssmin: {
      dist: {
        options: {

        },
        files: [{
          expand: true,
          src: ['public/**/*.css'],
          dest: ''
        }]
      }
    },
    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: [{
          expand: true,
          src: 'public/**/*.html',
          dest: ''
        }]
      }
    },
    i18next: {
      dev: {
        debug: true,
        src: 'pages/**/*.html',
        removeUnusedKeys: true,
        dest: 'public',
        options: {
          lngs: ['en', 'nl'],
          resource: {
            loadPath: 'public/i18n/{{lng}}/{{ns}}.json',
            savePath: 'i18n/{{lng}}/{{ns}}.json'
          }
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-preprocess');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('i18next-scanner');

  grunt.registerTask('minify', ['htmlmin', 'cssmin', 'uglify']);
  grunt.registerTask('default', ['mkdir', 'sass', 'browserify', 'preprocess', 'minify']);

};
