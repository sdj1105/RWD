'use strict';
module.exports = function() {

	var source = 'src/',
		development = 'dist/',

		// 웹 서버 설정
		server = {
			root: [development],
			port: 8888,
			livereload: true
		},

		// HTML 템플릿 설정
		html = {
			src  : source + '/**/*.html',
			dest: development
		},

		// Sass 설정
		sass = {
			src        : source + 'sass/**/*.{scss,sass}',
			dest       : development + 'css/',
			options: {
				outputStyle: 'compact'
			}
		},

		// JS 설정
		js = {
			src: source + 'js/**/*.js',
			out: 'all.min.js',
			dest: development + 'js/',
			options: {
				mangle: true
			}
		},

		// Autoprefixer 브라우저 옵션
		AUTOPREFIXER = [
			'ie >= 9',
			'ie_mob >= 10',
			'ff >= 30',
			'chrome >= 34',
			'safari >= 7',
			'opera >= 23',
			'ios >= 7',
			'android >= 4.4',
			'bb >= 10'
		];

	return {
		src    : source,
		dev    : development,

		html   : html,
		sass   : sass,
		js : js,

		SERVER        : server,
		autoprefixer  : AUTOPREFIXER
	};
};
