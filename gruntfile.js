module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
       
        replace: {
            dev: {
                options: {
                    patterns: [
                        {
                            match: 'ENDERECO_DO_CSS',
                            replacement: './styles/main.css'
                        },
                        {
                            match: 'ENDERECO_DO_JS',
                            replacement: './scripts/main.min.js'
                        }
                    ]
                },
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ['src/index.html'],
                        dest: 'dev/'
                    }

                ]
            }
        },

        less: {
            dev: {
                files:
                {
                    'dev/styles/main.css':'src/styles/main.less'
                }
            }
        },

        uglify: {
            target: {
                files:{
                    'dev/scripts/main.min.js' : 'src/scripts/main.js'
                }
            }
        }

    })
grunt.loadNpmTasks('grunt-replace')
grunt.loadNpmTasks('grunt-contrib-less');
grunt.loadNpmTasks('grunt-contrib-uglify');


grunt.registerTask('default', ['less', 'replace', 'uglify']);

}