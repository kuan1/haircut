var gulp = require("gulp");
var concat = require("gulp-concat");
var rename = require("gulp-rename");
var uglify = require("gulp-uglify");
var clean = require("gulp-clean-css");
var htmlmin = require("gulp-htmlmin");
var imagemin = require("gulp-imagemin");

gulp.task("uglify",function(){
	gulp.src("**/*.js").pipe(uglify()).pipe(gulp.dest("./dist"));
	console.log("js压缩完成")
});

gulp.task("cleanCss",function(){
	gulp.src("**/*.css").pipe(clean()).pipe(gulp.dest("dist")).pipe(concat('all.css')).pipe(gulp.dest('dist/css'));
	console.log("css压缩完成");
});

gulp.task("htmlMin",function(){
	gulp.src("**/*.html")
//	.pipe(htmlmin({
//		removeComments:true,
//		minifyCSS:true,
//		minifyJS:true
//	}))
	.pipe(gulp.dest("dist"));
});

gulp.task("imageMin",function(){
	gulp.src("img/**/*.png").pipe(imagemin()).pipe(gulp.dest("./dist/img"));
	console.log("图片压缩完成");
})

gulp.task("destJson",function(){
	gulp.src("**/*.json").pipe(gulp.dest("./dist"));
	console.log("运送json成功");
})

gulp.task("default",["uglify","cleanCss","htmlMin","imageMin","destJson"],function(){
	console.log("gulp运行成功");
})
