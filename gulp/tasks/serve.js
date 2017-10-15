'use strict';

module.exports = function() {
  $.gulp.task('serve', function() {
    $.browserSync.init({
      open: false,
      server: $.root
    });

    $.browserSync.watch([$.root + '/**/*.*', '!**/*.css'], $.browserSync.reload);
  });
};