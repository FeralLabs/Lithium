'use strict'

module.exports = function(grunt) {

	grunt.initConfig({
		less: {
			base: {
				files: {
					"example/lithium.css": ["less/lithium.less"]
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.registerTask('default', ['less'])
};