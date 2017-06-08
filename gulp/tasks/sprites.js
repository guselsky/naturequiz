var gulp = require('gulp');
svgSprite = require('gulp-svg-sprite');

var config = {
	mode: {
		css:{

		}
	}
}

gulp.task('createSprite', function(){
	return gulp.src('./app/assets/images/**/*.svg')
		.pipe(svgSprite(config))
		.pipe(gulp.dest('./app/assets/sprite'));
});