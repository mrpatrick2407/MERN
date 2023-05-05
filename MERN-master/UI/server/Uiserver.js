import path from "path";
import express from "express";
import proxy from "http-proxy-middleware";
import render from "./render.jsx";
import dotenv from 'dotenv';

 

const app = express();

dotenv.config();
const port = process.env.PORT;

if(true){
    const webpack = require('webpack');
    const devMiddleware = require('webpack-dev-middleware');
    const hotMiddleware = require('webpack-hot-middleware');
    const config = require('../web.config.js')[0];
config.entry.app.push('webpack-hot-middleware/client');
config.plugins = config.plugins || [];
config.plugins.push(new webpack.HotModuleReplacementPlugin());
   
const compiler = webpack(config);
 app.use(devMiddleware(compiler));
  app.use(hotMiddleware(compiler));
}

if (!process.env.UI_API_ENDPOINT) {
  process.env.UI_API_ENDPOINT = 'http://localhost:3000/graphql';
  console.log("process  "+process.env.UI_SERVER_API_ENDPOINT +process.env.UI_API_ENDPOINT)
}

if (!process.env.UI_SERVER_API_ENDPOINT) {
  process.env.UI_SERVER_API_ENDPOINT = process.env.UI_API_ENDPOINT;
}

app.get('/env.js', (req, res) => {
  const env = { UI_API_ENDPOINT: process.env.UI_API_ENDPOINT };
  res.send(`window.ENV = ${JSON.stringify(env)}`);
});
app.use(express.static('src'));
app.get("/about",(req,res,next)=>{
  render(req,res,next)
});
app.use('/graphql', proxy({ target: 'http://localhost:3000' }));
app.get('*',(req,res)=>{
  res.sendFile(path.join("src/index.html"));
})
app.listen(port, () => { console.log(`Listening onport ${port}`); });
if(module.hot.accept){
  module.hot.accept('./render.jsx')
}