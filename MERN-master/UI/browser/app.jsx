import Pages from '../src/Page.jsx'
import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router} from 'react-router-dom';
import { createBrowserHistory } from 'history';


const history = createBrowserHistory();
export default class Change extends React.Component {
    constructor(){
        super()
        this.state = {count:0};
    }
    componentDidMount(){
        console.log("Mounted componnt");
    }
    componentDidUpdate(){
        console.log("Updated component");
    }
    render() {
        return (
            <div>
               <button onClick={()=>this.setState({count:this.state.count+1})}>Increment</button>
               <button onClick={()=>this.setState({count:this.state.count-1})}>Decrement</button>
               <div>{this.state.count}</div>
    
            </div>
        )
      }
    }

 const ele= (  
    <div>
            <Router  history={history}>
            <Pages/>
            </Router>
           
            
    </div>
  
 );
ReactDOM.render(ele,document.getElementById("con"))
if (module.hot) { module.hot.accept(); }