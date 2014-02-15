module.exports = function(grunt) {

  require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
      build: {
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
      dynamic: {
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
      all: ['gruntfile.js', 'js/**/*.js']
    },
    watch: {
      options: {
        livereload: true,
      },
      less: {
        files: ['less/**/*.*'],
        tasks: ['less']
      },
      imagemin: {
        files: ['images/**/*.*'],
        tasks: ['imagemin']
      },
      jshint: {
        files: ['gruntfile.js', 'js/**/*.js'],
        tasks: ['jshint']
      }
    }
  });

  grunt.registerTask('default', []);

};