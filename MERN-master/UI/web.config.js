
const path =require('path');
module.exports={
    mode:'development',
    entry: { app: ['./browser/App.jsx','./src/IssueList.jsx'] },
    output:{
        filename:'[name].bundle.js',
        path:path.resolve(__dirname, 'public')
    },
    optimization: {
        splitChunks: {
          name: 'vendor',
          chunks: 'all',
        },
      },
      devtool:'source-map',
    
    module:{
        rules:[{

            test:/\.jsx?$/,
            exclude: /node_modules/,
            use:{
                loader:'babel-loader'
            }
        }]
    }

}