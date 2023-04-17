import { Link, NavLink ,withRouter} from "react-router-dom";


 function IssueRow(props)

{ 
    
    const issue=props.issue;
    return ( 
        <>
        <tr> 
        <td >{issue.id}</td> 
        <td >{issue.status}</td> 
        <td >{issue.owner}</td> 
        <td >{issue.created.toDateString()}</td> 
        <td >{issue.effort}</td> 
        <td >{issue.due? issue.due.toDateString():''}</td> 
        <td >{issue.title}</td> 
        <td><Link to={`/edit/${issue.id}`}>Edit</Link> { ' [] '}
        <NavLink to={`/issues/${issue.id}`}>Select</NavLink></td>
        
        </tr>
        </>
        );
} 
export default withRouter(IssueRow)
