import IssueFilter from './IssueFilter.jsx';
import IssueTable from './IssueTable.jsx';
import IssueAdd from './IssueAdd.jsx'; 
import URLSearchParams from 'url-search-params';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import IssueDetails from './IssueDetail.jsx'
import {graphqlendpoint} from './graphqlendppoint.js'
import {FormLabel} from'react-bootstrap'
import {Card} from 'react-bootstrap'
import Toast from './Toast.jsx';


  export default  class IssueList extends React.Component{
    constructor(){
        super();
        this.state={issues:[],toastmessage:'',
        toasttype:"success",
        toastshowing:false
        ,}
        this.createissue=this.createissue.bind(this);
        this.closeIssue=this.closeIssue.bind(this);
        this.deleteissue=this.deleteissue.bind(this);
        this.showsuccess=this.showsuccess.bind(this);
        this.showerror=this.showerror.bind(this);
        this.dismiss=this.dismiss.bind(this);
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
    showsuccess(mess){
        this.setState({toastmessage:mess,toasttype:"success",toastshowing:true})
        console.log("Debugging Toast"+this.state.toastshowing)
    
       }
       showerror(mess){
        this.setState({toastmessage:mess,toasttype:"danger",toastshowing:true})
      
       }
       dismiss(){
      this.setState({toastshowing:false})
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
    

    const data =await graphqlendpoint(query,vars,this.showerror);
    if(data){
        this.showsuccess("Issues loaded")
        this.setState({issues:data.issueList})
    }
    }

    async closeIssue(index){
        const issues=this.state.issues;
        console.log(index);
        const mutation =`mutation IssueUpdate($id: Int!) {
            issueUpdate(id: $id, Changes: {status:Closed}) {
              id title status owner effort created due description  
              }
            }`;
       const data =await graphqlendpoint(mutation,{id:issues[index].id});
       if(data){
        this.setState((prevState)=>{
            const newState =[...prevState.issues];
            newState[index] = data.issueUpdate;
            return {issues: newState};
        })
       }else{
        
        this.loadData();

       }
    }

    async deleteissue(index){
        console.log("delete issue")
        console.log(index);
        const mutation=`mutation IssueDelete($id: Int!) {
            issueDelete(id: $id)
          }`
          const {location:{pathname,search},history}=this.props;
          console.log(pathname+search)
          const {issues}=this.state;
          const {id}=issues[index];
          const data= await graphqlendpoint(mutation,{id});
          if(data){
            this.setState((prevState)=>{
                const newlist=[...prevState.issues];

                if(pathname==`/issues`){
                    history.push({pathname:`/issues`,search:search})
                }
                newlist.splice(index, 1);
                console.log(newlist)

                return {issues:newlist};
            });
            
          }
    }

    async createissue(issue){
        
        const query=`query issueAdd($issue:Issueinput!) {
            issueAdd(issue:$issue) {
            id
            }
        }`;

        const data =await graphqlendpoint(query,{issue},this.showerror);
        if(data){
            this.showsuccess("Created successfully")
            this.loadData();
        }
    }
    
    render(){
        const { match } = this.props;
        const toastmessage=this.state.toastmessage;
        const toastshowing=this.state.toastshowing;
        const toasttype=this.state.toasttype;
        return (
            <React.Fragment>
                <Card >
                    <Card.Title>Filter</Card.Title>
                    <Card.Body >
                <IssueFilter/>

                    </Card.Body>
                </Card>
                <Card >
                    
                    <Card.Body >
                         <IssueTable deleteissue={this.deleteissue} closeIssue={this.closeIssue}  issues={this.state.issues}/>

                    </Card.Body>
                </Card>
                <Card >                    
                    <Card.Body >
                         <IssueAdd createIssue={this.createissue}/>
                    </Card.Body>
                </Card>
            <Toast showing={toastshowing} className={toasttype} onDismiss={this.dismiss}>{toastmessage}</Toast>
                <Switch>
              <Route path={`/issues/:id`} component={IssueDetails} />
                </Switch>

            </React.Fragment>
        );
    }
}