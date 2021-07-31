module.exports = function(grunt){
  grunt.initConfig({
    concat: {
      dist_js: {
        options: {
          separator: ';\n',
          process: function(src, filepath) {
            return '// Source: ' + filepath + '\n' +
              src.replace(/\/\/# sourceMappingURL=([A-z0-9\-\.\_]+)/g, '').trim();
          }
        },
        src: [
          './generated/*.js',
          './dist/src/*.js',
          './dist/index.js',
        ],
        dest: './dist/worker.js'
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('default', ['concat']);

};
