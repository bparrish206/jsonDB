module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-simple-mocha');

  grunt.initConfig({
    jshint: {
      options: {
        node: true
      },
      src: ['test/**/*.js', 'jsonDB.js']
    },
  });

  grunt.registerTask('test', ['jshint']);
  grunt.registerTask('default', 'test');
};
