module.exports = {
    configureWebpack:{
      resolve:{
        alias:{
          'assets':'@/assets',
          'components':'@/components',
          'commit':'@/commit',
          'view':'@/view',
        }
      }
    },
    // devServer:{
    //   proxy: {
    //     '/api': {
    //      // target: 'http://localhost:8080/',
    //       pathRewrite: {
    //         '^/api': 'public'
    //       }
    //     }
    //   }
    // }
    
  }
  