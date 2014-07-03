var path = require('path');

module.exports = function(grunt) {

  'use strict';

  grunt.registerMultiTask('environment', 'Writes an environment file to specified location', function() {

    var data = this.data;

    var src = data.src || grunt.config.get('environment.src');
    var dest = data.dest || grunt.config.get('environment.dest');
    var envFile = data.fileName || grunt.config.get('environment.fileName') || 'environment.json';

    if (grunt.file.isDir(src)) {
      src = path.join(src, grunt.option('target') + '.json');
    }

    if (grunt.file.isDir(dest)) {
      dest = path.join(dest, envFile);
    }

    grunt.file.copy(src, dest);

  });

};