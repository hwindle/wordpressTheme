module.exports = function(grunt) {
  // configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),

    concat: {
      options: {
        separator: ";", 
      },
      dist: {
        src: ["sass/*.scss"],
        dest: "sass/style.scss",
      }
    },
    sass: {
      dist: {
        src: ["sass/style.scss"],
        dest: "css/style.css",
      }
    },
    clean: ["sass/style.scss", "css/style.css"]
    
  });
  
  // Load the grunt plugins
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-contrib-sass");
  grunt.loadNpmTasks('grunt-contrib-clean');

  // default tasks
  grunt.registerTask("default", ["clean", "concat", "sass"]);
};
