const express = require('express');
const enableHMR = (process.env.ENABLE_HMR || 'true') === 'true';
const path=require('path')



const app = express();
const proxy1 = require('http-proxy-middleware');
require('dotenv').config();

const port = process.env.PORT || 8000;


if(enableHMR){
    const webpack = require('webpack');
    const devMiddleware = require('webpack-dev-middleware');
    const hotMiddleware = require('webpack-hot-middleware');
    const config = require('../web.config.js');
config.entry.app.push('webpack-hot-middleware/client');
config.plugins = config.plugins || [];
config.plugins.push(new webpack.HotModuleReplacementPlugin());
   

const compiler = webpack(config);
 app.use(devMiddleware(compiler));
  app.use(hotMiddleware(compiler));
}


app.use(express.static('src'));
app.use('/graphql', proxy1({ target: 'http://localhost:3000' }));
app.get('',(req,res)=>{
  res.sendFile(path.join("src/index.html"));
})
app.listen(port, () => { console.log(`Listening onport ${port}`); });
