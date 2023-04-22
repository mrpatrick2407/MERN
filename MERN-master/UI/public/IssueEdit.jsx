import DateInput from "./DateInput.jsx";
import Numinput from "./NumInput.jsx";
import { graphqlendpoint } from "./graphqlendppoint";
import {Link} from 'react-router-dom'
import TextInput from "./TextInput.jsx";
import {Button} from 'react-bootstrap'


export default class IssueEdit extends React.Component {
  constructor() {
    super();
    this.state = { 
        issue: {
          id: '',
          title: '',
          owner: '',
          created: '',
          due: '',
          description: '',
          _id: '',
          status: '',
          effort: '',
        },
        invalidfields:{}
      };
    this.onChange = this.onChange.bind(this);
    this.handler=this.handler.bind(this);
    this.onValidityChange = this.onValidityChange.bind(this);
  }
  componentDidMount() {
    this.loaddata();
  }
  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.loaddata();
    }
  }

  onChange(e,val){
   const {name,value:test}=e.target;
   let rvalue;
   console.log("valll"+val+"testttt"+test)
if((name=='due'||name=='created') && val!==null){
  rvalue=new Date(val).toISOString();
  console.log("rrrrvalll"+rvalue)

}
   const value = Number.isNaN(val) ?val:test;
   console.log(value+"from parent"+name)
   if((name=='due'||name=='created') && val!==null){
   this.setState(prevState=>({issue:{...prevState.issue,[name]:rvalue}}))
   }else{
   this.setState(prevState=>({issue:{...prevState.issue,[name]:value}}))

   }
  }

  onValidityChange(e,valid){
    const {name}=e.target;
    this.setState((prevState)=>{
      const invalidfields={...prevState.invalidfields,[name]:!valid}
      if(valid) delete invalidfields[name];
      return {invalidfields}
    })
  }



  async handler(e){
    e.preventDefault();
    const issue=this.state.issue;
    const query=`mutation IssueUpdate($id: Int!, $changes: Issueupdateinput!) {
      issueUpdate(id: $id, Changes: $changes) {
        id title status owner effort created due description  
        }
      }`
      const {_id,id,created,...changes}=issue;
      const data= await graphqlendpoint(query,{id,changes})
      console.log(data.issueUpdate.title)
     if(data){
        this.setState({issue: {
          title:data.issueUpdate.title,
          status:data.issueUpdate.status,
          description:data.issueUpdate.description,
          owner:data.issueUpdate.owner,
          effort:data.issueUpdate.effort,
          due:data.issueUpdate.due,
          
        }});
        
        
      }

  }
  async loaddata() {
    const id = parseInt(this.props.match.params.id);
    const query = `query Issue($issueId: Int!) {
            issue(id: $issueId) {
            id
            title
            owner
            created
            due
            description
            _id
            status
            effort  
            }
          }`;

    let vars = { issueId: id };
    const data = await graphqlendpoint(query, vars);
    if (data) {
        const { issue } = data;
        //issue.due = issue.due ? issue.due.toDateString() : "";
        issue.created = issue.created ? issue.created.toDateString() : "";
        
        issue.owner = issue.owner != null ? issue.owner : "";
        issue.description = issue.description != null ? issue.description : "";
        this.setState({ issue });
        
    } else {
      this.setState({ issue: {} });
    }
  }

  
  render() {
    const issue = this.state.issue;
    var created=issue.created;
   const {invalidfields}=this.state;
   console.log("parent edit"+issue.due)
   let messgae;
   if(Object.keys(invalidfields).length!==0){
    messgae=(<div className="error">Please enter the correct date</div>)
   }
    return (
        
        <form onSubmit={this.handler}>
        <h3>{`Editing issue: ${issue.id}`}</h3>
        <table>
          <tbody>
            <tr>
              <td>Created:</td>
              <td>{issue.created}</td>
            </tr>
            <tr>
              <td>Status:</td>
              <td>
                <select name="status"  value={issue.status} onChange={this.onChange}>
                  <option value="New">New</option>
                  <option value="Assigned">Assigned</option>
                  <option value="Fixed">Fixed</option>
                  <option value="Closed">Closed</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Owner:</td>
              <td>
                <TextInput key={issue.id}  name="owner" value={issue.owner} onChange={this.onChange} />
              </td>
            </tr>
            <tr>
              <td>Effort:</td>
              <td>
                <Numinput key={issue.id} name="effort" value={issue.effort} onChange={this.onChange}  />
              </td>
            </tr>
            <tr>
              <td>Due:</td>
              <td>
                <DateInput onValidityChange={this.onValidityChange} key={issue.id} name="due" value={issue.due} onChange={this.onChange} />
              </td>
            </tr>
            <tr>
              <td>Title:</td>
              <td>
                <TextInput
                key={issue.id}
                  size={50}
                  name="title"
                  value={issue.title}
                  onChange={this.onChange}
                />{" "}
              </td>{" "}
            </tr>{" "}
            <tr>
              {" "}
              <td>Description:</td>{" "}
              <td>
                {" "}
                <TextInput
                tag="textarea"
                key={issue.id}
                  rows={8}
                  cols={50}
                  name="description"
                  value={issue.description}
                  onChange={this.onChange}
                />{" "}
              </td>{" "}
            </tr>{" "}
            <tr>
              {" "}
              <td />{" "}
              <td>
                <button type="submit">Submit</button>
              </td>{" "}
            </tr>{" "}
          </tbody>{" "}
        </table>{" "}
        {messgae}
        <Link to={`/edit/${issue.id - 1}`}>Prev</Link> {" | "}{" "}
        <Link to={`/edit/${issue.id + 1}`}>Next</Link>{" "}
      </form>
    )
  }
}
