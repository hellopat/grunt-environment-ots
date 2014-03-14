module.exports = function(grunt) {

  grunt.initConfig({

    'environment': {
      'src': './test',
      'dest': '.',
      'fileName': 'sample.json'
    }

  });

  grunt.loadTasks('./tasks');

};