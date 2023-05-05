import React from 'react';
import ReactDOMServer from 'react-dom/server'
import template from './template.js';
import { StaticRouter } from 'react-router-dom';
import Pages from '../src/Page.jsx';
import { graphqlendpoint } from '../src/graphqlendppoint.js';    
import store from '../src/store.js'
import IssueFilter from '../src/IssueFilter.jsx';

    async function render(req,res){
    const query=`query {about}`;
    const inital= await graphqlendpoint(query);
    console.log("this is the intial value of graphqledpoint fro render.jsx"+JSON.stringify(inital));
 store.inital=inital;
    const ele=(
    <StaticRouter location={req.url} content={{}}>
      <Pages/>
    </StaticRouter>)
    const body=ReactDOMServer.renderToString(ele)
    res.send(template(body))
    }

export default render
