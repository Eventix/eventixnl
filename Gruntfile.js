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
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-preprocess');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['mkdir', 'sass', 'browserify', 'preprocess']);

};
