module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    /** Sass task*/

    sass: {
            dev: {
              options: {
                     style: 'expanded',
                     sourcemap: 'none',
              },
              files: {
                'css/styles-new.css': 'css/styles.scss'
              }
            },
            dist: {
              options: {
                     style: 'compressed',
                     sourcemap: 'none',
              },
              files: {
                'css/style-min.css': 'css/styles.scss'
              }
            } 
    },
        autoprefixer: {
          options: {
            browsers: ['last 2 version']
          },
          multiple_files: {
            expand: true,
            flatten: true,
            src: '*.css',
            dest: ''
          }
        },

        /** Watch task*/

        watch: {
          css: {
            files: '**/*.scss',
            tasks: ['sass', 'autoprefixer']
          }
        }

  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.registerTask('default', ['watch']);
}