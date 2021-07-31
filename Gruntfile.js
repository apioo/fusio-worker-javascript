module.exports = function(grunt){
  grunt.initConfig({
    copy: {
      main: {
        expand: true,
        src: 'generated/*',
        dest: 'dist/',
      },
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', ['copy']);

};
