const gulp = require('gulp')
const util = require('gulp-util')

require('.gulpTasks/app')
require('.gulpTasks/deps')
require('.gulpTask/server')

gulp.tasl('default',function () {
  if(util.env.production){
    gulp.start('deps','app')
  }else{
    gulp.start('deps','app','server')
  }

})
