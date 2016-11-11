fis.match('*', {
  useHash: false
});

fis.match('::packager', {
  postpackager: fis.plugin('loader', {
    allInOne: true
  })
});

fis.match('*.less', {
  // fis-parser-less 插件进行解析
  parser: fis.plugin('less'),
  // .less 文件后缀构建后被改成 .css 文件
  rExt: '.css'
});

/*fis.match('*.es6', {
  parser: fis.plugin('zdktranslate-es6'),
  rExt: '.js' // .es6 最终修改其后缀为 .js
})*/

fis.media('publish').match('*', {
  deploy: fis.plugin('git', {
		from : '/',
        to: '/',
        remote: 'https://github.com/zdkGitHub/mygit.git',
        branch: 'gh-pages',
        clean: false
  })
});



/*fis.config.set('modules.deploy', ['default', 'git'])

fis.config.set('settings.deploy.git', {
    publish : {
        from : '/',
        to: '/',
        remote: 'https://github.com/zdkGitHub/mygit.git',
        branch: 'gh-pages',
        clean: false
    }
});
*/
