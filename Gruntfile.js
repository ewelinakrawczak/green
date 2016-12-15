module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            build: {
                src: 'js/main.js',
                dest: 'js/main_min.js'
            }
        },
         cssmin: {
  target: {
    files: {
        'css/zielony.min.css':['css/may.css','css/zielony.css']
    }
  }
}, 
watch:{
    scripts: {
    files: ['js/*.js'],
    tasks: ['default']
    
  },
  css:{
      files: ['css/*.css'],
    tasks: ['default']
  }
    
}
    });


  

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');


grunt.registerTask('default', ['cssmin', 'uglify','watch']);
};