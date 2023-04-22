import React from 'react';
import URLSearchParams from 'url-search-params'
import {withRouter} from 'react-router-dom';
import {Button} from 'react-bootstrap'


class IssueFilter extends React.Component{
    constructor({location:{search}}) {    
        super();
       
            const params = new URLSearchParams(search); 
        this.state = { status: params.get('status') ||  '',
        effortmin: params.get('effortmin') ||'' ,
        effortmax: params.get('effortmax') };
        this.update = this.update.bind(this); 
        console.log(params.get('status'));
          this.applyFilter = this.applyFilter.bind(this);
          this.resetfilter = this.resetfilter.bind(this);
          this.onChangeeffortmin=this.onChangeeffortmin.bind(this);
          this.onChangeeffortmax=this.onChangeeffortmax.bind(this);
      }
        update(e){
        this.setState({status:e.target.value});
        }

    onChangeeffortmax(e){
        const string = e.target.value;
        console.log(string);
        if (/^\d+$/.test(string)) {
            console.log("aoid");
            this.setState({ effortmax: string });
          }
    }
    onChangeeffortmin(e){
        const string = e.target.value;
        if(/^\d+$/.test(string)){
            this.setState({effortmin:e.target.value})
        }
    }

    applyFilter(e){
        const status=this.state.status;
        const { effortmin, effortmax } = this.state;
        const params=new URLSearchParams();
        if(status) params.set('status', status);
        if(effortmin) params.set('effortmin', effortmin);
        if(effortmax) params.set('effortmax', effortmax);
        console.log(params.toString());
        const search=params.toString()? `?${params.toString()}` :'';

        const {history}=this.props;
        history.push({
                    pathname:'/issues',
                    search
        });        
        }

    resetfilter(){
    const {location:{search}} = this.props;
    const params = new URLSearchParams(search);
    const state=params.get('status');
    const effortmax=params.get('effortmax');
    const effortmin=params.get('effortmin');
    this.setState({status:state,effortmax:effortmax,effortmin:effortmin})
    console.log("done");
    }
            render(){
                const states=this.state.status;
                const effortmin=this.state.effortmin;
                  const effortmax=this.state.effortmax;
                return(
                    <div>Status:{''}
                        <select value={states} onChange={this.update}>
                            <option value="">(All)</option>
                            <option value="New">New</option>
                            <option value="Assigned">Assigned</option>
                            <option value="Fixed">Fixed</option>
                            <option value="Closed">Closed</option>
                        </select>
                        {''}Effort Between{''}
                        <input onChange={this.onChangeeffortmin} value={effortmin} size={5}/>
                        <input onChange={this.onChangeeffortmax}  value={effortmax} size={5}/>
                        <Button variant='primary' onClick={this.applyFilter}>Apply</Button>
                        <Button  onClick={this.resetfilter}>Reset</Button>
                        
                    </div>
                );
            }
        }
export default withRouter(IssueFilter)