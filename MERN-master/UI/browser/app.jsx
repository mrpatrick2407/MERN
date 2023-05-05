import Pages from '../src/Page.jsx'
import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router} from 'react-router-dom';
import { createBrowserHistory } from 'history';


const history = createBrowserHistory();


 const ele= (  
    <div>
            <Router  history={history}>
                 <Pages/>
            </Router>
    </div>
  
 );
ReactDOM.hydrate(ele,document.getElementById("con"))
if (module.hot) { module.hot.accept(); }
