module.exports = function(grunt) {

  require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
      build: {
        options: {
          dumpLineNumbers: "all",
          strictImports: true
        },
        files: {
          "css/custom.css": "less/custom.less"
        }
      }
    },
    watch: {
      lesss: {
        files: ['less/**/*.*'],
        tasks: ['less']
      }
    }
  });

  grunt.registerTask('default', []);

};