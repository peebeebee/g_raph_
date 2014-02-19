module.exports = function(grunt) {

  require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
      local: {
        options: {
          dumpLineNumbers: "all",
          strictImports: true,
          sourceMap: true,
          sourceMapFilename: 'css/custom.css.map',
          sourceMapRootpath: '../'
        },
        files: {
          "css/custom.css": "less/custom.less"
        }
      }
    },
    imagemin: {
      local: {
        options: {
          pngquant: true
        },
        files: [{
          expand: true,
          cwd: 'images/',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'images/'
        }]
      }
    },
    jshint: {
      all: ['gruntfile.js', 'js/*.js']
    },
    autoprefixer: {
      local: {
        options: {
          // Task-specific options go here.
          // @see: https://github.com/ai/autoprefixer#browsers
          browsers: ['last 5 version', 'ie 8', 'ie 9'],
          map: true
        },
        src: 'css/custom.css',
      }
    },
    watch: {
      styles: {
        files: ['less/**/*.*'],
        tasks: ['less', 'autoprefixer']
      },
      images: {
        files: ['images/**/*.*'],
        tasks: ['imagemin']
      },
      scripts: {
        files: ['gruntfile.js', 'js/**/*.js'],
        tasks: ['jshint']
      },
      options: {
        livereload: true,
      }
    }
  });

  grunt.registerTask('default', ['less', 'imagemin', 'jshint', 'autoprefixer']);

};