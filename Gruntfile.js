'use strict'

module.exports = function(grunt) {

	grunt.initConfig({
		less: {
			development: {
				options: {
					concat: false
				},
				files: {
					"example/lithium.css": ["less/lithium.less"]
				}
			},

			production: {
				options: {
					concat: true,
					compress: true
				},
				files: {
					"example/lithium.css": ["less/lithium.less"]
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.registerTask('default', ['less:development']);
	grunt.registerTask('production', ['less:production']);
};