var gulp = require('gulp');
var concat = require('gulp-concat');
//- 多个文件合并为一个；
var minifyCss = require('gulp-minify-css');
//- 压缩CSS为一行；
var rev = require('gulp-rev');
//- 对文件名加MD5后缀
var chalk = require('chalk');
var gutil = require('gutil');
var webpack = require('webpack');
var config = require('./webpack.config');

var pro = require('./project.json');

/** 编译scss 文件
*/
var scssFlie, distname;
if(typeof pro.scss.file === 'undefined'||pro.scss.file.length == 0){
  scssFile = ['./src/static/style/*'];
}else{
  scssFile = pro.scss.file;
}

if(typeof pro.scss.distname === 'undefined'){
  distname = 'style';
}else{
  distname = pro.scss.distname;
}

gulp.task('scss', function() {
  console.log(chalk.green("budle the scss: ") + chalk.cyan(scssFile));
  var file;
  if(pro.scss.minify){
    file = gulp.src(scssFile)
        .pipe(concat(distname + '.min.css')) //- 合并后的文件名
        .pipe(minifyCss())   //- 压缩处理成一行
  }else{
    file = gulp.src(scssFile)
        .pipe(concat(distname + '.css')) //- 合并后的文件名
  }

  if(pro.scss.md5){
    file = file.pipe(rev())    //- 文件名加MD5后缀
  }

  file.pipe(gulp.dest('./dist/css'))  //- 输出文件本地
});

gulp.task('webpack',function() {
    webpack(config,function(error, stats) {
        if (error) throw new gutil.PluginError('webpack', chalk.red(error));
        console.log('[webpack]', stats);

    });
});
/** 图片压缩
*/
const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');

gulp.task('picmin', function(){
  imagemin(['images/*.{jpg,png}'], 'build/images', {
      plugins: [
          imageminMozjpeg({targa: true}),
          imageminPngquant({quality: '65-80'})
      ]
  }).then(files => {
      console.log(files);
      //=> [{data: <Buffer 89 50 4e …>, path: 'build/images/foo.jpg'}, …]
  });
})
