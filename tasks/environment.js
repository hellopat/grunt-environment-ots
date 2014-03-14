var path = require('path');

module.exports = function(grunt) {

  'use strict';

  grunt.registerTask('environment', 'Writes an environment file to specified location', function() {

    grunt.config.requires(
      'environment.src',
      'environment.dest'
    );

    var src = grunt.config.get('environment.src');
    var dest = grunt.config.get('environment.dest');
    var envFile = grunt.config.get('environment.fileName') || 'environment.json';

    if (grunt.file.isDir(src)) {
      src = path.join(src, grunt.option('target') + '.json');
    }

    if (grunt.file.isDir(dest)) {
      dest = path.join(dest, envFile);
    }

    grunt.file.copy(src, dest);

  });

};