module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        files: {
          'assets/css/style.css' : 'assets/scss/style.scss'
        }
      }
    },
    autoprefixer:{
      options: {
              browsers: ['last 2 versions', 'ie 8', 'ie 9', '> 1%']
          },
          main: {
              expand: true,
              flatten: true,
              src: 'assets/css/style.css/assets/css/style.css',
              dest: 'dist/'
          }
    },
    watch: {
      css: {
        files: '**/*.scss',
        tasks: ['sass','autoprefixer']
      }
    }
  });
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.registerTask('default',['watch']);
}
