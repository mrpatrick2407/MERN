import { graphqlendpoint } from "./graphqlendppoint";
import {Link} from 'react-router-dom'
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
          status: 'New',
          effort: '',
        }
      };
    this.onchange = this.onchange.bind(this);
    this.handler=this.handler.bind(this);
  }
  componentDidMount() {
    this.loaddata();
  }
  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.loaddata();
    }
  }

  onchange(e){
   
  }

  handler(e){


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
        issue.due = issue.due ? issue.due.toDateString() : "";
        issue.created = issue.created ? issue.created.toDateString() : "";
        issue.effort = issue.effort != null ? issue.effort.toString() : "";
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
    console.log(created)
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
                <select name="status" value={issue.status} onchange={this.onchange}>
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
                <input name="owner" value={issue.owner} onchange={this.onchange} />
              </td>
            </tr>
            <tr>
              <td>Effort:</td>
              <td>
                <input name="effort" value={issue.effort} onchange={this.onchange} />
              </td>
            </tr>
            <tr>
              <td>Due:</td>
              <td>
                <input name="due" value={issue.due} onchange={this.onchange} />
              </td>
            </tr>
            <tr>
              <td>Title:</td>
              <td>
                <input
                  size={50}
                  name="title"
                  value={issue.title}
                  onchange={this.onchange}
                />{" "}
              </td>{" "}
            </tr>{" "}
            <tr>
              {" "}
              <td>Description:</td>{" "}
              <td>
                {" "}
                <textarea
                  rows={8}
                  cols={50}
                  name="description"
                  value={issue.description}
                  onchange={this.onchange}
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
        <Link to={`/edit/${issue.id - 1}`}>Prev</Link> {" | "}{" "}
        <Link to={`/edit/${issue.id + 1}`}>Next</Link>{" "}
      </form>
    )
  }
}
