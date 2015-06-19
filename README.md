# RWD Project 준비 과정

### Node.js, Git, GitHub 설치/설정

#### Gulp & Bower 전역 설치
```sh
$ npm install --global gulp bower # npm i -g gulp bower
```

#### Gulp 로컬 설치 및 플러그인 설치
```sh
# 설치한 NPM 모듈
# gulp
# gulp-connect
# gulp-sass
# gulp-sourcemaps
# gulp-imagemin
# gulp.spritesmith
# gulp-csslint
# gulp-jshint
# gulp-concat
# gulp-uglify
$ npm i -D gulp gulp-sass # -D === --save-dev
```

#### 사용할 모듈 모두 설치 후에 `package.json` & `gulpfile.js` 파일 생성
```sh
$ npm init # package.json 파일 생성
$ touch gulpfile.js # gulpfile.js 파일 생성
```

#### `gulpfile.js` 구성
```js
/**
 * 모듈 호출
 * --------------------------------
 */
var gulp = require('gulp');

/**
 * 테스크 등록
 * --------------------------------
 */
gulp.task('default', function() {
	console.log('this is gulp');
});
```

---



