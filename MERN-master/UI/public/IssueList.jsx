import IssueFilter from './IssueFilter.jsx';
import IssueTable from './IssueTable.js';
import IssueAdd from './IssueAdd.jsx'; 
import URLSearchParams from 'url-search-params';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import IssueDetails from './IssueDetail.jsx'
import {graphqlendpoint} from './graphqlendppoint.js'





  export default  class IssueList extends React.Component{
    constructor(){
        super();
        this.state={issues:[]}
        this.createissue=this.createissue.bind(this);
        
    }
    componentDidMount(){
        this.loadData()
    }   
    componentDidUpdate(prevProps){
        const {location:{search:prevSearch}}=prevProps;
        const {location:{search}}=this.props;
        if(prevSearch!=search){
            this.loadData()
        }
    }
    async loadData(){
        const {location:{search}}=this.props;
        const params=new URLSearchParams(search);
        const vars={}
        if(params.get('status')){
            vars.status=params.get('status')
        }
        if(params.get('effortmin')){vars.effortmin=parseInt(params.get('effortmin'))}
        if(params.get('effortmax')){vars.effortmax=parseInt(params.get('effortmax'))}
        const query=`query($status: statustype,$effortmin:Int,$effortmax:Int){
            issueList(status: $status,effortmax:$effortmax,effortmin:$effortmin) {
            title
              _id
              status
              owner
              id
              effort
              due
              created
            }
          }`;
    

    const data =await graphqlendpoint(query,vars);
    if(data){
        this.setState({issues:data.issueList})
    }
    }



    async createissue(issue){
        
        const query=`query issueAdd($issue:Issueinput!) {
            issueAdd(issue:$issue) {
            id
            }
        }`;

        const data =await graphqlendpoint(query,{issue});
        if(data){
            this.loadData();
        }
    }
    
    render(){
        const { match } = this.props;
        return (
            <React.Fragment>
                <h1>Issue Tracker</h1>
                <hr/>
                <IssueFilter/>
                <hr/>
                <IssueTable  issues={this.state.issues}/>
                <hr/>
                <IssueAdd createIssue={this.createissue}/>
                <Switch>
              <Route path={`/issues/:id`} component={IssueDetails} />
                </Switch>

                

            </React.Fragment>
        );
    }
}